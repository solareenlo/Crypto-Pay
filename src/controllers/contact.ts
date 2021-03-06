import { Request, Response } from 'express';
import nodemailer from 'nodemailer';

/**
 * GET /contact
 * Contact form page.
 */
export let getContact = (req: Request, res: Response) => {
  const unknownUser = !(req.user);
  res.render('contact', {
    title: 'お問合せ',
    unknownUser
  });
};

/**
 * POST /contact
 * Send a contact form via Nodemailer.
 */
export let postContact = (req: Request, res: Response) => {
  let fromName;
  let fromEmail;
  if (!req.user) {
    req.check('name').not().isEmpty().withMessage('お名前をお書きください.');
    req.check('email').isEmail().withMessage('メールアドレスが無効です.');
  }
  req.check('message').notEmpty().withMessage('ご用件をお書きください');

  const errors = req.validationErrors();

  if (errors) {
    req.flash('errors', errors);
    return res.redirect('/contact');
  }

  if (!req.user) {
    fromName = req.body.name;
    fromEmail = req.body.email;
  } else {
    fromName = req.user.profile.name || '';
    fromEmail = req.user.email;
  }

  let transporter = nodemailer.createTransport({
    service: 'SendGrid',
    auth: {
      user: process.env.SENDGRID_USER,
      pass: process.env.SENDGRID_PASSWORD
    }
  });
  const mailOptions = {
    to: 'your@email.com',
    from: `${fromName} <${fromEmail}>`,
    subject: 'Contact Form | Crypto Pay',
    text: req.body.message
  };
  return transporter.sendMail(mailOptions)
    .then(() => {
      req.flash('success', { msg: 'Email has been sent successfully!' });
      res.redirect('/contact');
    })
    .catch((err) => {
      if (err.message === 'self signed certificate in certificate chain') {
        console.log('WARNING: Self signed certificate in certificate chain.' +
          ' Retrying with the self signed certificate. Use a valid certificate if in production.');
        transporter = nodemailer.createTransport({
          service: 'SendGrid',
          auth: {
            user: process.env.SENDGRID_USER,
            pass: process.env.SENDGRID_PASSWORD
          },
          tls: {
            rejectUnauthorized: false
          }
        });
        return transporter.sendMail(mailOptions);
      }
      console.log('ERROR: Could not send contact email after security downgrade.\n', err);
      req.flash('errors', { msg: 'Error sending the message. Please try again shortly.' });
      return false;
    })
    .then((result) => {
      if (result) {
        req.flash('success', { msg: 'Email has been sent successfully!' });
        return res.redirect('/contact');
      }
    })
    .catch((err) => {
      console.log('ERROR: Could not send contact email.\n', err);
      req.flash('errors', { msg: 'Error sending the message. Please try again shortly.' });
      return res.redirect('/contact');
    });
};
