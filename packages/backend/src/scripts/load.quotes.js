const fs = require('fs');
const path = require('path');

const Quote = require('../models/quote.model');

async function loadQoutes(){
    try {
        const quotes = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/quotes.json'), 'utf-8'));
        await Quote.deleteMany({});
        await Quote.insertMany(quotes);
        console.log('Quotes loaded successfully. ');
    } catch (error) {
        console.error('Error loading quotes:', error);
    }
};

module.exports = loadQoutes;