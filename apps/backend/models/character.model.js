import { Schema, model } from 'mongoose';

const characterSchema = new Schema({
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

const Character = model('Character', characterSchema);

export default Character;