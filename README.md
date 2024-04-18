# Beer Rating App
### To Do:
* Find a second api to use: upload to Mongo db and connect to frontend
* Figure out connecting user db to OAuth sign in ([resource](https://www.dhiwise.com/post/react-google-oauth-the-key-to-secure-and-quick-logins))
* Connect rate beer form to mongo db to save data to specific user profile

## How to run:
Clone repo:
```
$ git clone git@github.com:mfmiller7/beer.git
```
Start the server:
```
$ cd beer/backend
$ node server.js
```
In a new tab, run the frontend:
```
$ cd beer/frontend
$ rm -r node-modules
$ npm install
$ npm run dev
```