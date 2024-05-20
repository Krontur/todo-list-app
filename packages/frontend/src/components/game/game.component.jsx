import './game.component.css'

const Game = ({ quote, characters }) => {

    return(
        <>
            <h2>
                {quote.quote}
            </h2>
            <div className="characters">
                {characters.map(character => (
                    <div className='character' key={character._id} >
                        <img src={`characters_images/${character.imagen}`} alt={character.nombre}/>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Game;