const mongoose = require("mongoose");

const beerSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    title: { type: String, required: true },
    country: { type: String, required: true },
    abv: { type: Number, required: true },
    description: { type: String, required: true },
});

const Beer = mongoose.model("Beer", beerSchema);

module.exports = Beer;
