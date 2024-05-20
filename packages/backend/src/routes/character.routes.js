const express = require('express');
const { getAllCharacters, createCharacter, updateCharacter, deleteCharacter, getRandomCharacter, getNRandomCharacters, getCharacterByAlias } = require('../controllers/character.controller');

const router = express.Router();

router.get('/characters', getAllCharacters);
router.post('/characters', createCharacter);
router.put('/characters/:id', updateCharacter);
router.delete('/characters/:id', deleteCharacter);
router.get('/character', getRandomCharacter);
router.get('/characters/:num', getNRandomCharacters);
router.get('/character/:alias', getCharacterByAlias);

module.exports = router;