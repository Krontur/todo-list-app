import { Router } from 'express';
import { getAllQuotes, createQuote, updateQuote, deleteQuote, getRandomQuote } from '../controllers/quote.controller';

const router = Router();

router.get('/quotes', getAllQuotes);
router.get('/quote', getRandomQuote);
router.post('/quotes', createQuote);
router.put('/quotes/:id', updateQuote);
router.delete('/quotes/:id', deleteQuote);

export default router;