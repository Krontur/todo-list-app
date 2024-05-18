const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

const quoteRoutes = require('./routes/quote.routes');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', quoteRoutes);

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('Conectado a MongoDB'))
.catch(err => console.log(err));

app.get('/', (req, res) => {
    res.send('Who said that? The Game');
});

app.listen(process.env.PORT, () => {
    console.log(`Servidor iniciado en el puerto ${process.env.PORT}`);
})
