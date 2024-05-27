import { Schema, model } from 'mongoose';

const quoteSchema = new Schema({
    quote: {
        type: String,
        required: true
    },
    character: {
        type: String
    }
});

const Quote = model('Quote', quoteSchema);

export default Quote;