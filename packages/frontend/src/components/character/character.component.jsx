import ('./character.component.css')
import { useState } from 'react';

const Character = ({ character, onResponse }) => {

    const [disabled, setDisabled] = useState(false)

    return(
        <div className='character'>
            <a
             onClick={(e) => {
                e.preventDefault();
                onResponse(character.alias);
                setDisabled(true)
             }}
             style = {{
                pointerEvents: disabled ? 'none' : 'auto', 
            }}
            >
                <img src={`characters_images/${character.imagen}`} alt={character.nombre}/>
                <p>{character.nombre}</p>
            </a>
        </div>
    );
}

export default Character;