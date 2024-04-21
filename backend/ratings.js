// for accessing ratings from mongo db
const express = require("express");
const router = express.Router();
const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://mfmiller:vail2014@cluster0.dyyqsmf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

router.get('/getallratings', async (req, res) => {
    try {
        const client = new MongoClient(uri);
        await client.connect();
        const database = client.db('Ratings');
        const collection = database.collection('all');
        const ratings = await collection.find({}).toArray();
        await client.close(); // Close MongoDB client connection
        res.json(ratings); // Send beers data as JSON response
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;