const express = require('express');
const { getAllQuotes, createQuote, updateQuote, deleteQuote } = require('../controllers/quote.controller');

const router = express.Router();

router.get('/quotes', getAllQuotes);
router.post('/quotes', createQuote);
router.put('/quotes/:id', updateQuote);
router.delete('/quotes/:id', deleteQuote);

module.exports = router;