const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config(); // If using dotenv for environment variables
const routes = require("./routes");
const beer = require("./beer");
const cors = require("cors");

const app = express();
app.use(cors());
const port = process.env.PORT || 3000;

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Could not connect to MongoDB:", err));

app.use(express.json());
//app.use("/", routes);
app.use("/", beer);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

// const { MongoClient } = require('mongodb');
// const express = require('express');
//
// const app = express();
// const port = 3000;
// async function main(){
//
//     const uri = "mongodb+srv://mfmiller:vail2014@cluster0.dyyqsmf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
//
//
//     const client = new MongoClient(uri);
//
//     try {
//         await client.connect();
//
//     } catch (e) {
//         console.error(e);
//     }
// }
//
// main().catch(console.error);
//
// app.get('/beers/:country', async (req, res) => {
//     const country = req.params.country;
//
//     try {
//         const client = new MongoClient(uri);
//         await client.connect();
//         const database = client.db("BeerMe");
//         const collection = database.collection(country);
//         const beers = await collection.find({}).toArray();
//         res.json(beers); // Send beers data as JSON response
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });
//
//
// // Start the server
// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
//     main().catch(console.error);
// });