const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Beer = require("./models/Beer");

router.get("/BeerMe/:country", async (req, res) => {
    const country = req.params.country;

    try {
        const BeerModel = mongoose.model(country, Beer.schema, country);
        const beers = await BeerModel.find();
        res.json(beers);
    } catch (error) {
        console.error("Error fetching beers:", error);
        res.status(500).json({ error: "Could not fetch beers" });
    }
});

module.exports = router;