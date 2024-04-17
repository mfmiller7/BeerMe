const { MongoClient } = require('mongodb');
const express = require('express');
const beer = require("./beer");

const app = express();
const port = 3000;

async function main(){
    const uri = "mongodb+srv://mfmiller:vail2014@cluster0.dyyqsmf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    const client = new MongoClient(uri);
    try {
        await client.connect();
    } catch (e) {
        console.error(e);
    }
}
main().catch(console.error);
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:5173");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use("/", beer);

const fetch = require('node-fetch');
app.post('/api/auth/google', (req, res) => {
  const { code } = req.body;
  const client_id = '85119275849-lnbri26vmvvihfc2qelr5cgp83eil3dq.apps.googleusercontent.com';
  const client_secret = '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';
  const redirect_uri = 'http://localhost:3000/api/auth/google';
  const grant_type = 'authorization_code';
  fetch('<https://oauth2.googleapis.com/token>', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      code,
      client_id,
      client_secret,
      redirect_uri,
      grant_type,
    }),
  })
  .then(response => response.json())
  .then(tokens => {
    // Send the tokens back to the frontend, or store them securely and create a session
    res.json(tokens);
  })
  .catch(error => {
    // Handle errors in the token exchange
    console.error('Token exchange error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  });
});

app.get("/", (req, res) => {
    res.send("use /beers/:country to get beer list for a country");
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    main().catch(console.error);
});