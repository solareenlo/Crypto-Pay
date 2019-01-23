# Crypto-Pay
暗号通貨支払いのできる簡単なECサイトの雰囲気を感じ取れるデモサイト.  
テストネットだけで使用できます.  
**WIP!!!**  

## Usage
ローカル環境で動かすには,
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
yarn build または npm run build

# ユーザー情報を保存しておくMongodbを別のターミナルで起動
mongod

# トランスパイルしたコードを実行
yarn start または npm run start

# 任意のブラウザでhttp://localhost:3000を開く
```

## MongoDBのコンソールからの使い方
- https://github.com/solareenlo/Web-App-with-Nodejs-Express/tree/master/08_mongodb_console

## 使用した技術
フロントエンド ... Pug, Bootstrap4, axios  
バックエンド ... Node.js, Express, mongoose  
DB ... MongoDB  
JSのモジュールバンドラ ... Webpack4  
利用したBIP ... [BIP10](https://github.com/bitcoin/bips/blob/master/bip-0010.mediawiki)(マルチシグ), [BIP11](https://github.com/bitcoin/bips/blob/master/bip-0011.mediawiki)(M of N トランザクション), [BIP21](https://github.com/bitcoin/bips/blob/master/bip-0021.mediawiki)(QRコード), [BIP32](https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki)(HDウォレット), [BIP39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki)(ニーモニック), [BIP44](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki)(HDウォレットのマルチアカウント階層), [BIP49](https://github.com/bitcoin/bips/blob/master/bip-0049.mediawiki)(P2WPKHをP2SHでネスト)

## References
- https://github.com/blockchain-edu/be-intensive-week4
- https://github.com/blockchain-edu/bitcoin-ec-example
- https://github.com/blockchain-edu/hello-express
- https://github.com/sahat/hackathon-starter
- https://github.com/Microsoft/TypeScript-Node-Starter
- https://www.udemy.com/web-application-with-nodejs-express/
- https://cccabinet.jpn.org/bootstrap4/
- http://osamtimizer.hatenablog.com/entry/2018/07/07/204706
- https://qiita.com/muiscript/items/573247b12ff0bc4e5d3c#read-get
