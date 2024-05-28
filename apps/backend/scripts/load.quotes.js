import { readFileSync } from 'fs';
import { join } from 'path';

import { deleteMany, insertMany } from '../models/quote.model';

async function loadQoutes(){
    try {
        // eslint-disable-next-line no-undef
        const quotes = JSON.parse(readFileSync(join(__dirname, '../data/lossimpsonfrases.json'), 'utf-8'));
        await deleteMany({});
        await insertMany(quotes);
        console.log('Quotes loaded successfully. ');
    } catch (error) {
        console.error('Error loading quotes:', error);
    }
}

export default loadQoutes;