const express = require('express');
const app = express();
const port = 3000;

// to connect to mongo db
const { MongoClient } = require('mongodb');
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

// fixes CORS issues
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:5173");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS"); // Include OPTIONS method
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// to get beers
const beer = require("./beer");
app.use("/", beer);

// for Google oauth
require('dotenv').config();
const {OAuth2Client, UserRefreshClient,} = require('google-auth-library');
const cors = require('cors');
app.use(cors());
app.use(express.json());
const oAuth2Client = new OAuth2Client(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    'postmessage',
);
app.post('/auth/google', async (req, res) => {
    const { tokens } = await oAuth2Client.getToken(req.body.code); // exchange code for tokens
    res.json(tokens);
});
app.post('/auth/google/refresh-token', async (req, res) => {
    const user = new UserRefreshClient(
        clientId,
        clientSecret,
        req.body.refreshToken,
    );
    const { credentials } = await user.refreshAccessToken();
    res.json(credentials);
})

// save rated beers
app.use(express.json());
app.post('/savenewrating', async (req, res) => {
    const beerData = req.body;
    console.log(`Beer data received:`, beerData);
    const saveBeerToMongoDB = async (beerData) => {
        const client = new MongoClient('mongodb+srv://mfmiller:vail2014@cluster0.dyyqsmf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

        try {
            await client.connect();
            const database = client.db('Ratings');
            const collection = database.collection('all');
            await collection.insertOne(beerData);
            console.log(`Inserted ${beerData} into MongoDB.`);
        } catch (error) {
            console.error(`Error saving rating to MongoDB: ${error.message}`);
        } finally {
            await client.close();
        }
    };
    await saveBeerToMongoDB(beerData);
});

// get rated beers
const ratings = require("./ratings");
app.use("/", ratings);

// for server
app.get("/", (req, res) => {
    res.send("Welcome to the server!");
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    main().catch(console.error);
});