import './game.component.css'
import Character from '../character/character.component'

const Game = ({ quote, characters, onResponse }) => {

    return(
        <>
            <h2>
                {quote.quote}
            </h2>
            <div className='characters'>{
                characters.map(
                    character => <Character key={character._id} character={character} onResponse={onResponse} />
                )}
            </div>
        </>
    );
}

export default Game;