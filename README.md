# Chat

リアルタイムチャットができるReact_MUI × Socket.ioのデモアプリです。

## 機能概要

- ユーザー登録・ログイン（ローカルストレージ管理）
- ルームごとのリアルタイムチャット
- メッセージの自動スクロール
- Material UIによるシンプルなUI

## セットアップ方法

1. リポジトリをクローン
   ```sh
   git clone https://github.com/yourname/ChatApri.git
   cd ChatApri/my-react-app
   ```

2. 依存パッケージをインストール
   ```sh
   npm install
   ```

3. サーバー（Socket.ioサーバー）が必要な場合は、`server`ディレクトリで
   ```sh
   npm install
   node index.js
   ```

4. Reactアプリを起動
   ```sh
   npm start
   ```

## 使い方

1. アカウント登録画面でユーザー情報を入力し登録
2. ログイン後、チャットルームを選択
3. メッセージを入力して送信

## 工夫したポイント

- ReactのHooksで状態管理
- useRefでメッセージの自動スクロール
- Material UIでレスポンシブなデザイン
- ローカルストレージでユーザー情報を管理

## 画面
[ログイン]  　　　　![image](https://github.com/s-matsumoto51/Chat/blob/main/assets/Login.png)
[アカウント登録]　　![image](https://github.com/s-matsumoto51/Chat/blob/main/assets/AccontForm.png)
[チャット]　 　　 　![image](https://github.com/s-matsumoto51/Chat/blob/main/assets/Chat.png)

