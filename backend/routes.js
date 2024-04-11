const express = require('express');
const router = express.Router();
const axios = require('axios');
const { MongoClient } = require('mongodb');

const rapidAPIKey = '44000b90famshea255d0d4631716p1ea7fbjsn362c30e06221';

const countries = ['belgium', 'czech', 'denmark', 'finland', 'ireland', 'italy', 'luxembourg', 'malta', 'norway', 'poland', 'portugal', 'spain', 'sweden', 'switzerland'];

const fetchBeerData = async (country) => {
    try {
        const response = await axios.get(`https://beers-list.p.rapidapi.com/beers/${country}`, {
            headers: {
                'X-RapidAPI-Key': rapidAPIKey,
                'X-RapidAPI-Host': 'beers-list.p.rapidapi.com'
            }
        });

        // Assuming response.data is an array of beer objects
        return response.data.map(beer => ({
            abv: beer.alchool,
            title: beer.title,
            description: beer.description
        }));
    } catch (error) {
        console.error(`Error fetching beer data for ${country}: ${error.message}`);
        return [];
    }
};

const saveBeerToMongoDB = async (country, beers) => {
    const client = new MongoClient('mongodb+srv://mfmiller:vail2014@cluster0.dyyqsmf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

    try {
        await client.connect();
        const database = client.db('BeerMe');
        const collection = database.collection(country);

        const result = await collection.insertMany(beers);
        console.log(`Inserted ${result.insertedCount} beers for ${country} into MongoDB.`);
    } catch (error) {
        console.error(`Error saving beer data to MongoDB for ${country}: ${error.message}`);
    } finally {
        await client.close();
    }
};

router.get('/', async (req, res) => {
    try {
        for (const country of countries) {
            const beers = await fetchBeerData(country);
            if (beers.length > 0) {
                await saveBeerToMongoDB(country, beers);
            }
        }
        res.send('All beer data fetched and saved to MongoDB.');
    } catch (error) {
        console.error('An error occurred:', error);
        res.status(500).send('An error occurred while fetching and saving beer data.');
    }
});