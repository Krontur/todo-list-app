const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

const quoteRoutes = require('./routes/quote.routes');
const characterRoutes = require('./routes/character.routes');

const loadQuotes = require('./scripts/load.quotes');
const loadCharacters = require('./scripts/load.characters');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', quoteRoutes);
app.use('/api', characterRoutes);

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('Conectado a MongoDB'))
.then(() => { if(!process.env.NODE_ENV || process.env.NODE_ENV === 'development'){
    loadQuotes()
}})
.then(() => { if(!process.env.NODE_ENV || process.env.NODE_ENV === 'development'){
    loadCharacters()
}})
.catch(err => console.log(err));

app.get('/', (req, res) => {
    res.send('Who said that? The Game');
});

// Solo escuchar en el puerto si no estamos en el entorno de Firebase Functions
if (!process.env.FIREBASE_CONFIG) {
    const OUT_PORT = process.env.OUT_PORT || 5000;
    app.listen(OUT_PORT, () => {
        console.log(`Servidor iniciado en el puerto ${OUT_PORT}`);
    })
}

module.exports = app;