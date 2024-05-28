import { readFileSync } from 'fs';
import { join } from 'path';

import Quote from '../models/character.model.js';

async function loadCharacters(){
    try {
        // eslint-disable-next-line no-undef
        const characters = JSON.parse(readFileSync(join(__dirname, '../data/lossimpsonpersonajes.json'), 'utf-8'));
        await Quote.deleteMany({});
        await Quote.insertMany(characters);
        console.log('Characters loaded successfully. ');
    } catch (error) {
        console.error('Error loading characters:', error);
    }
}

export default loadCharacters;