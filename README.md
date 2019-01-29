# Crypto-Pay
**Live Demo**: https://boiling-brook-52440.herokuapp.com  

Bitcoin支払いのできる簡単なECサイトの雰囲気を感じ取れるデモサイトです.  
実用性はあまり考慮せず, BIP32のHDウォレット機能に特化したものになっています.  
テストネットだけで使用できます.  
[ブロックチェーンエンジニア集中講座](https://www.blockchain-edu.jp/engineer)第4週の成果物です.

### [WIP]実装予定の機能[Coming Sooooooon]
- [ ] お問合せに対する返信メール
- [ ] SNSによるログイン
- [ ] 購入確認画面
- [ ] 入金を確認する画面
- [ ] オーナーが売上金を回収する機能
- [ ] Bitcoin以外の暗号通貨に対応
- [ ] コードのブラッシュアップ
- [ ] ui/uxを工夫する

## ローカル環境での動かし方
```bash
# GitHubからソースコードをダウンロード
git clone https://github.com/solareenlo/Crypto-Pay.git

# ソースコードがあるディレクトリに移動
cd Crypto-Pay

# ソースコードに必要なファイルをyarnかnpmを使って外部からインストール
yarn または npm install

# 外部からインストールしてきたファイルのうち必要なファイルをsrcディレクトリにコピー
yarn copy または npm run copy

# srcディレクトリにあるソースコードをトランスパイルしてdistディレクトリに保存
yarn build-dev または npm run build-dev

# ユーザー情報を保存しておくMongodbを別のターミナルで起動
mongod

# トランスパイルしたコードを実行
yarn start-dev または npm run start-dev

# 任意のブラウザでhttp://localhost:3000を開く
```

## MongoDBのコンソールからの使い方
- https://github.com/solareenlo/Web-App-with-Nodejs-Express/tree/master/08_mongodb_console

## 使用した技術
フロントエンド ... Pug, JavaScript, Bootstrap4, axios  
バックエンド ... Node.js, TypeScript, Express, mongoose   
DB ... MongoDB, mLab  
PaaS ... Heroku  
JSのモジュールバンドラ ... Webpack4  
参照したBIP ... [BIP10](https://github.com/bitcoin/bips/blob/master/bip-0010.mediawiki)(マルチシグ), [BIP11](https://github.com/bitcoin/bips/blob/master/bip-0011.mediawiki)(M of N トランザクション), [BIP21](https://github.com/bitcoin/bips/blob/master/bip-0021.mediawiki)(QRコード), [BIP32](https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki)(HDウォレット), [BIP39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki)(ニーモニック), [BIP44](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki)(HDウォレットのマルチアカウント階層), [BIP49](https://github.com/bitcoin/bips/blob/master/bip-0049.mediawiki)(P2WPKHをP2SHでネスト)

## やんわりとした解説は以下にあります.
- https://scrapbox.io/crypto-pay/

## References
- https://github.com/blockchain-edu/be-intensive-week4
- https://github.com/blockchain-edu/bitcoin-ec-example
- https://github.com/blockchain-edu/hello-express
- https://github.com/sahat/hackathon-starter
- https://github.com/Microsoft/TypeScript-Node-Starter
- https://www.udemy.com/web-application-with-nodejs-express/
- https://www.udemy.com/the-complete-nodejs-developer-course-2/
- https://cccabinet.jpn.org/bootstrap4/
- http://osamtimizer.hatenablog.com/entry/2018/07/07/204706
- https://qiita.com/muiscript/items/573247b12ff0bc4e5d3c#read-get
- https://mongoosejs.com/docs/guide.html
