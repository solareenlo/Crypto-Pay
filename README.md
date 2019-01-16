# Crypto-Pay

暗号通貨支払いのできる簡単なECサイトの雰囲気を掴み取るためのデモサイト.  
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

# ユーザー情報を保存しておくデータベースのMongodbを起動
mongod

# トランスパイルしたコードを実行
yarn start または npm run start

# 任意のブラウザでhttp://localhost:3000を開く
```

## References
- https://github.com/blockchain-edu/be-intensive-week4
- https://github.com/blockchain-edu/bitcoin-ec-example
- https://github.com/blockchain-edu/hello-express
- https://github.com/sahat/hackathon-starter
- https://github.com/Microsoft/TypeScript-Node-Starter
- https://www.udemy.com/web-application-with-nodejs-express/
- https://cccabinet.jpn.org/bootstrap4/
- http://osamtimizer.hatenablog.com/entry/2018/07/07/204706
