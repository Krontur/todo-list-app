import Character from '../models/character.model';

export async function getAllCharacters(req, res) {
    try {
        const characters = await Character.find();
        res.json(characters);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export async function createCharacter(req, res) {
    try {
        const newCharacter = new Character(req.body);
        const savedCharacter = await newCharacter.save();
        res.status(201).json(savedCharacter);
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

export async function updateCharacter(req, res) {
    try {
        const updatedCharacter = await Character.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedCharacter);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export async function deleteCharacter(req, res) {
    try {
        const deletedCharacter = await Character.findByIdAndDelete(req.params.id);
        res.status(204).json(deletedCharacter);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export async function getRandomCharacter(req, res) {
    try {
        const count = await Character.countDocuments();
        const random = Math.floor(Math.random() * count);
        const character = await Character.findOne().skip(random);
        res.status(200).json(character);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export async function getNRandomCharacters(req, res) {
    try {
        const { num } = req.params;
        const characters = await Character.aggregate([{ $sample: { size: parseInt(num) } }]);
        res.status(200).json(characters);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export async function getCharacterByAlias(req, res) {
    try {
        const { alias } = req.params;
        const character = await Character.findOne(
            { alias: alias }
        );
        res.status(200).json(character);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

