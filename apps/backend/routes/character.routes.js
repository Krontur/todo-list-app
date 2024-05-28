import { Router } from 'express';
import { getAllCharacters, createCharacter, updateCharacter, deleteCharacter, getRandomCharacter, getNRandomCharacters, getCharacterByAlias } from '../controllers/character.controller.js';

const router = Router();

router.get('/characters', getAllCharacters);
router.post('/characters', createCharacter);
router.put('/characters/:id', updateCharacter);
router.delete('/characters/:id', deleteCharacter);
router.get('/character', getRandomCharacter);
router.get('/characters/:num', getNRandomCharacters);
router.get('/character/:alias', getCharacterByAlias);

export default router;