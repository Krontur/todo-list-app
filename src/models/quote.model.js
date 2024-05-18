const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
    quote: {
        type: String,
        required: true
    },
    charachter: {
        type: String
    }
});

const Quote = mongoose.model('Quote', quoteSchema);

module.exports = Quote;