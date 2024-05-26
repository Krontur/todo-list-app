const express = require('express');
const { getAllQuotes, createQuote, updateQuote, deleteQuote, getRandomQuote } = require('../controllers/quote.controller');

const router = express.Router();

router.get('/quotes', getAllQuotes);
router.get('/quote', getRandomQuote);
router.post('/quotes', createQuote);
router.put('/quotes/:id', updateQuote);
router.delete('/quotes/:id', deleteQuote);

module.exports = router;