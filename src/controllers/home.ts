import { Request, Response } from 'express';
import { default as User, UserModel, IUserDocument } from '../models/User';

interface Inum {
  price: number[];
  count: number[];
  amount: number[];
  address: string[];
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
  if (!req.user) {
    return res.redirect('/');
  }
  const tbtc: Inum = {
    price: [0.005, 0.003, 0.001],
    count: [0, 0, 0],
    amount: [0, 0, 0],
    address: ['large', 'middle', 'small']
  };
  const { id } = req.user;
  console.log(req.user);
  User.find({ _id: id }, (findErr, user: IUserDocument) => {
    if (findErr) res.status(500);
    else {
      res.status(200);
      tbtc.count[0] = user[0].largeCount;
      tbtc.count[1] = user[0].middleCount;
      tbtc.count[2] = user[0].smallCount;
      for (let i = 0; i < 3; i++)
        tbtc.amount[i] = tbtc.price[i] * tbtc.count[i];
      res.render('pay/bitcoin', {
        title: 'Bitcoin Pay',
        tbtc
      });
    }
  });
};

export let putPizzaCount = (req: Request, res: Response) => {
  const { id } = req.user; // mongodbで一意に与えられるユーザーのidを取得
  const count: number = req.body.data.count; // 何個ずつ増やしたり減らしたりするかの個数
  const size: number = req.body.data.size;
  let pizzaCount: string;
  if (size == 0) {
    pizzaCount = 'largeCount';
    console.log(pizzaCount);
    User.findByIdAndUpdate(id, { $inc: {largeCount: count} }, err => {
      if (err) res.status(500).send();
      else {
        User.find({ _id: id }, (findErr, user: IUserDocument) => {
          if (findErr) res.status(500).send();
          else {
            res.status(200).send(`${user[0].largeCount}`); // userは配列の中にobjectが入ってる
          }
        });
      }
    });
  } else if (size == 1) {
    pizzaCount = 'middleCount';
    console.log(pizzaCount);
    User.findByIdAndUpdate(id, { $inc: {middleCount: count} }, err => {
      if (err) res.status(500).send();
      else {
        User.find({ _id: id }, (findErr, user: IUserDocument) => {
          if (findErr) res.status(500).send();
          else {
            res.status(200).send(`${user[0].middleCount}`); // userは配列の中にobjectが入ってる
          }
        });
      }
    });
  } else if (size == 2) {
    pizzaCount = 'smallCount';
    console.log(pizzaCount);
    User.findByIdAndUpdate(id, { $inc: {smallCount: count} }, err => {
      if (err) res.status(500).send();
      else {
        User.find({ _id: id }, (findErr, user: IUserDocument) => {
          if (findErr) res.status(500).send();
          else {
            res.status(200).send(`${user[0].smallCount}`); // userは配列の中にobjectが入ってる
          }
        });
      }
    });
  }
};

export let getPayOthers = (req: Request, res: Response) => {
  res.render('pay/others', {
    title: 'Others Pay'
  });
};
