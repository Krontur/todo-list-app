const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
    alias: {
        type: String,
        required: true
    },
    edad: {
        type: Number,
        required: false
    },
    nombre: {
        type: String,
        required: true
    },
    ocupacion: {
        type: String,
        required: false
    },
    primera: {
        type: String,
        required: false
    },
    voz: {
        type: String,
        required: false
    },
    imagen: {
        type: String,
        required: false
    }
});

const Character = mongoose.model('Character', characterSchema);

module.exports = Character;