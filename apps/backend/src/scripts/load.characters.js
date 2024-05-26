const fs = require('fs');
const path = require('path');

const Quote = require('../models/character.model');

async function loadCharacters(){
    try {
        const characters = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/updated_characters.json'), 'utf-8'));
        await Quote.deleteMany({});
        await Quote.insertMany(characters);
        console.log('Characters loaded successfully. ');
    } catch (error) {
        console.error('Error loading characters:', error);
    }
}

module.exports = loadCharacters;