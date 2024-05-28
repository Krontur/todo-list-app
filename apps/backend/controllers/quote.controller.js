import Quote from '../models/quote.model.js';

export async function getAllQuotes(req, res) {
    try {
        const quote = await Quote.find();
        res.json(quote);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export async function createQuote(req, res) {
    try {
        const newQuote = new Quote(req.body);
        const savedQuote = await newQuote.save();
        res.status(201).json(savedQuote);
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

export async function updateQuote(req, res) {
    try {
        const updatedQuote = await Quote.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedQuote);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export async function deleteQuote(req, res) {
    try {
        const deletedQuote = await Quote.findByIdAndDelete(req.params.id);
        res.status(204).json(deletedQuote);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export async function getRandomQuote(req, res) {
    try {
        const count = await Quote.countDocuments();
        const random = Math.floor(Math.random() * count);
        const quote = await Quote.findOne().skip(random);
        res.status(200).json(quote);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}