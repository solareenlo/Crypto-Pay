import { Request, Response } from 'express';
import { default as User, UserModel, IUserDocument } from '../models/User';

interface Inum {
  large: number;
  medium: number;
  small: number;
}

/**
 * GET /
 * Home page.
 */
export let home = (req: Request, res: Response) => {
  res.render('home', {
    title: 'ホーム'
  });
};

export let getPayBitcoin = (req: Request, res: Response) => {
  const tbtc: Inum = {
    large: 0.005,
    medium: 0.003,
    small: 0.001
  };
  res.render('pay/bitcoin', {
    title: 'Bitcoin Pay',
    tbtc
  });
};

export let postPayBitcoin = (req: Request, res: Response) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  let num = req.body.num;
  num = req.user._id;
  res.send(`${firstName} ${lastName} ${num}`);
};

export let putLargeCount = (req: Request, res: Response) => {
  const { id } = req.user;
  const num = req.body.count;
  User.findByIdAndUpdate(id, { $inc: {'largeCount': num} }, err => {
    if (err) res.status(500).send();
    else {
      User.find({ _id: id }, (findErr, user: IUserDocument) => {
        if (findErr) res.status(500).send();
        else {
          res.status(200).send(`${user[0].largeCount}`);
        }
      });
    }
  });
};

export let getPayOthers = (req: Request, res: Response) => {
  res.render('pay/others', {
    title: 'Others Pay'
  });
};
