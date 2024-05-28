import express, { json } from 'express';
import { connect } from 'mongoose';
import cors from 'cors';
import { config } from 'dotenv';

import quoteRoutes from './routes/quote.routes';
import characterRoutes from './routes/character.routes';

import loadQuotes from './scripts/load.quotes';
import loadCharacters from './scripts/load.characters';

// Enviroment
config();

// Create a server object

const app = express();

app.use(cors());
app.use(json());

app.use('/api', quoteRoutes);
app.use('/api', characterRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to my game \"Who said that!?\"');
});

// Connect to the database
connect(process.env.MONGO_URI, {dbName: 'prod'})
.then(() => console.log('Conectado a MongoDB'))
.then(() => { loadQuotes() })
.then(() => { loadCharacters() })
.catch(err => console.log(err));

// Define the port to listen on
const OUT_PORT = process.env.OUT_PORT || 5000;

// Start the server
app.listen(OUT_PORT, () => {
    console.log(`Servidor iniciado en el puerto ${OUT_PORT}`);
})

// Export the server object
module.exports = app;
