const express = require("express");
const router = express.Router();
const {MongoClient} = require("mongodb");

router.get('/beers/:country', async (req, res) => {
    const country = req.params.country;

    try {
        const client = new MongoClient(uri);
        await client.connect();
        const database = client.db("BeerMe");
        const collection = database.collection(country);
        const beers = await collection.find({}).toArray();
        res.json(beers); // Send beers data as JSON response
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;