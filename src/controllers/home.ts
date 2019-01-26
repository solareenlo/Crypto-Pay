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
  if (size == 0) {
    User.findById(id, (err, user: IUserDocument) => {
      if (err) res.status(500).send();
      else {
        if ((user.largeCount >= 0 && count == 1) || (user.largeCount > 0 && count == -1)) { // userはobjectで返ってきてる
          User.findByIdAndUpdate(id, { $inc: {largeCount: count} }, err => {
            if (err) res.status(500).send();
            else {
              User.find({ _id: id }, (findErr, user: IUserDocument) => {
                if (findErr) res.status(500).send();
                else {
                  const data = {
                    address: `https://chart.apis.google.com/chart?cht=qr&chs=300x300&chl=bitcoin:?amount=${user[0].largeCount}`,
                    count: user[0].largeCount, // userは配列の中のobjectで返ってきてる
                    amount: 0.005
                  };
                  res.status(200).send(data);
                }
              });
            }
          });
        }
      }
    });
  } else if (size == 1) {
    User.findById(id, (err, user: IUserDocument) => {
      if (err) res.status(500).send();
      else {
        if ((user.middleCount >= 0 && count == 1) || (user.middleCount > 0 && count == -1)) { // userはobjectで返ってきてる
          User.findByIdAndUpdate(id, { $inc: {middleCount: count} }, err => {
            if (err) res.status(500).send();
            else {
              User.find({ _id: id }, (findErr, user: IUserDocument) => {
                if (findErr) res.status(500).send();
                else {
                  const data = {
                    address: `https://chart.apis.google.com/chart?cht=qr&chs=300x300&chl=bitcoin:?amount=${user[0].middleCount}`,
                    count: user[0].middleCount,
                    amount: 0.003
                  };
                  res.status(200).send(data); // userは配列の中にobjectが入ってる
                }
              });
            }
          });
        }
      }
    });
  } else if (size == 2) {
    User.findById(id, (err, user: IUserDocument) => {
      if (err) res.status(500).send();
      else {
        if ((user.smallCount >= 0 && count == 1) || (user.smallCount > 0 && count == -1)) { // userはobjectで返ってきてる
          User.findByIdAndUpdate(id, { $inc: {smallCount: count} }, err => {
            if (err) res.status(500).send();
            else {
              User.find({ _id: id }, (findErr, user: IUserDocument) => {
                if (findErr) res.status(500).send();
                else {
                  const data = {
                    address: `https://chart.apis.google.com/chart?cht=qr&chs=300x300&chl=bitcoin:?amount=${user[0].smallCount}`,
                    count: user[0].smallCount,
                    amount: 0.001
                  };
                  res.status(200).send(data); // userは配列の中にobjectが入ってる
                }
              });
            }
          });
        }
      }
    });
  }
};

export let getPayOthers = (req: Request, res: Response) => {
  res.render('pay/others', {
    title: 'Others Pay'
  });
};
