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

## 使用した技術
フロントエンド ... Pug, Bootstrap4, axios  
バックエンド ... Node.js, Express, mongoose  
DB ... MongoDB  
JSのモジュールバンドラ ... Webpack4  
利用したBIP ... BIP10(マルチシグ), BIP11(M of N トランザクション), BIP21(QRコード), BIP32(HDウォレット), BIP39(ニーモニック), BIP44(HDウォレットの階層), BIP49(P2WPKHをP2SHでネスト)

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
