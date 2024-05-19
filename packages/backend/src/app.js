const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

const quoteRoutes = require('./routes/quote.routes');

const loadQuotes = require('./scripts/load.quotes');

dotenv.config();

console.log('MONGO_URI:', process.env.MONGO_URI);
console.log('PORT:', process.env.PORT);

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', quoteRoutes);

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('Conectado a MongoDB'))
.then(() => loadQuotes())
.catch(err => console.log(err));

app.get('/', (req, res) => {
    res.send('Who said that? The Game');
});

app.listen(process.env.PORT, () => {
    console.log(`Servidor iniciado en el puerto ${process.env.PORT}`);
})
