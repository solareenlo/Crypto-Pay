import { Request, Response } from 'express';
import { default as User, UserModel, IUserDocument } from '../models/User';

const lib = require('../bitcoin/lib');

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
    req.flash('errors', { msg: '詳細を表示するにはログインしてください.証明書を発行するにはログインしてください.' });
    return res.redirect('/');
  }
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
  User.find({ _id: id }, (findErr, user: IUserDocument) => { // findしたものは配列の中のobjectとして返ってくる
    if (findErr) res.status(500);
    else {
      res.status(200);
      tbtc.count[0] = user[0].largeCount;
      tbtc.count[1] = user[0].middleCount;
      tbtc.count[2] = user[0].smallCount;
      for (let i = 0; i < 3; i++) {
        tbtc.amount[i] = tbtc.price[i] * tbtc.count[i];
        const pubKeysBase58: string[] = [];
        // 環境変数にあるpubkeys -> customerNumberによる子拡張公開鍵 -> ピザのサイズによる子拡張公開鍵を生成
        for (let j = 0; j < 3; j++)
          pubKeysBase58.push(lib.generateChildPubkeyBase58(user[0].extPubKey[j], i));
        const pubKeys: Buffer[] = [];
        // 環境変数にあるpubkeys -> customerNumberによる子拡張公開鍵 -> ピザのサイズによる子拡張公開鍵 -> ピザの個数による子拡張公開鍵を生成
        for (let j = 0; j < 3; j++)
          pubKeys.push(lib.generateChildPubkeyBuffer(pubKeysBase58[j], Number(tbtc.count[i])));
        tbtc.address[i] = lib.generateMultisigAddress(3, pubKeys);
      }
      res.render('pay/bitcoin', {
        title: 'Bitcoin Pay',
        tbtc
      });
    }
  });
};

const getCount: (user: IUserDocument, size: number) => Number = (user, size) => {
  if ( size == 0 ) {
    return user.largeCount;
  } else if ( size == 1 ) {
    return user.middleCount;
  } else if ( size == 2 ) {
    return user.smallCount;
  } else {
    return 0;
  }
};

export let putPizzaCount = async (req: Request, res: Response) => {
  const { id } = req.user; // mongodbで一意に与えられるユーザーのidを取得
  const count: number = req.body.data.count; // 何個ずつ増やしたり減らしたりするかの個数
  const size: number = req.body.data.size; // ピザのサイズ. 0 = large, 1 = middle, 2 = small.
  const prices: number[] = [0.005, 0.003, 0.001];
  try {
    await User.findById(id, (err, user: IUserDocument) => {
      if (err) res.status(500).send();
      const pizzaCount = getCount(user, size); // ピザの枚数
      if ((pizzaCount >= 0 && count == 1) || (pizzaCount > 0 && count == -1)) {
        if ( size == 0 ) {
          User.findByIdAndUpdate(id, { $inc: {largeCount: count} }, err => {
            if (err) res.status(500).send();
          });
        } else if ( size == 1 ) {
          User.findByIdAndUpdate(id, { $inc: {middleCount: count} }, err => {
            if (err) res.status(500).send();
          });
        } else if ( size == 2 ) {
          User.findByIdAndUpdate(id, { $inc: {smallCount: count} }, err => {
            if (err) res.status(500).send();
          });
        } else {
          res.status(500).send();
        }
      }
    }).exec();
  } catch {
    res.status(500).send();
  }
  try {
    await User.find({ _id: id }, (findErr, user: IUserDocument) => {
      if (findErr) res.status(500).send();
      const pizzaCount = getCount(user[0], size); // User.finde({_id: id})でDB検索すると結果が配列で返ってくるのでuserは使えずにuser[0]を使ってる.
      const pubKeysBase58: string[] = [];
      // 環境変数にあるpubkeys -> customerNumberによる子拡張公開鍵 -> ピザのサイズによる子拡張公開鍵を生成
      for (let i = 0; i < 3; i++)
        pubKeysBase58.push(lib.generateChildPubkeyBase58(user[0].extPubKey[i], size));
      const pubKeys: Buffer[] = [];
      // 環境変数にあるpubkeys -> customerNumberによる子拡張公開鍵 -> ピザのサイズによる子拡張公開鍵 -> ピザの個数による子拡張公開鍵を生成
      for (let i = 0; i < 3; i++)
        pubKeys.push(lib.generateChildPubkeyBuffer(pubKeysBase58[i], pizzaCount));
      const address: string = lib.generateMultisigAddress(3, pubKeys);
      const amount = prices[size] * Number(pizzaCount);
      const data = {
        address: `https://chart.apis.google.com/chart?cht=qr&chs=300x300&chl=bitcoin:${address}?amount=${amount}`,
        count: pizzaCount,
      };
      res.status(200).send(data);
    }).exec();
  } catch {
    res.status(500).send();
  }
};

export let getPayOthers = (req: Request, res: Response) => {
  res.render('pay/others', {
    title: 'Others Pay'
  });
};
