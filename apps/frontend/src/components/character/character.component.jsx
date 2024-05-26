import ('./character.component.css')
import { useState } from 'react';

const Character = ({ quote, character, onResponse }) => {

    const [disabled, setDisabled] = useState(false)
    const [correct, setCorrect] = useState(false)

    return(
        <div className='character'>
            <a
             onClick={(e) => {
                e.preventDefault();
                onResponse(character.alias);
                setDisabled(true);
                if(character.alias === quote.character){
                    setCorrect(true);
                }
             }}
             style = {{
                pointerEvents: disabled ? 'none' : 'auto',
                opacity: !disabled ? 1 : correct ? 1 : 0.5,
                cursor: disabled ? 'not-allowed' : 'pointer',
                transform: !disabled ? 'scale(1)' : correct ? 'scale(1.2)' : 'scale(0.9)',
                transition: 'all 0.3s'             
            }}
            >
                <img src={`characters_images/${character.imagen}`} alt={character.nombre}/>
                <p>{character.nombre} {!disabled ? '' : correct ? '✅' : '❌'}</p>

            </a>
        </div>
    );
}

export default Character;