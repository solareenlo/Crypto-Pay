import { Request, Response } from 'express';

/**
 * GET /
 * Home page.
 */
export let home = (req: Request, res: Response) => {
  const address: number = 1234567890;
  res.render('home', {
    title: 'ホーム',
    address
  });
};

export let getPayBitcoin = (req: Request, res: Response) => {
  res.render('pay/bitcoin', {
    title: 'Bitcoin Pay'
  });
};

export let postPayBitcoin = (req: Request, res: Response) => {
  res.render('pay/bitcoin', {title: 'Bitcoin Pay'});
};

export let getPayOthers = (req: Request, res: Response) => {
  res.render('pay/others', {
    title: 'Others Pay'
  });
};
