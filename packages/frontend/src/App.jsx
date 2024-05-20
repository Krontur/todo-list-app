import { useState, useEffect } from 'react'
//const dotenv = require('dotenv');
import './App.css';
import Game from './components/game/game.component';

//dotenv.config()

function App() {
  const [game, setGame] = useState(false)

  //fetch
  const [quote, setQuote] = useState([])
  const [character, setCharacter] = useState([])
  const [characters, setCharacters] = useState([])

  const fetchQuote = async () => {
    const response = await fetch('http://localhost:5000/api/quote')
    const data = await response.json()
    setQuote(data)
  }

  const fetchCharacter = async ( alias ) => {
    if(!alias) return;
    const response = await fetch(`http://localhost:5000/api/character/${alias}`)
    const data = await response.json()
    setCharacter(data)
  }

  const fetchCharacters = async () => {
    const response = await fetch('http://localhost:5000/api/characters/4')
    const data = await response.json()
    setCharacters(data)
  }

  useEffect(() => {
    fetchQuote()
    fetchCharacters()
}, [])

  useEffect(() => {
    fetchCharacters()
    if(quote.character){
      fetchCharacter(quote.character)
    }  
  }, [quote])

  useEffect(() => {
    if(character.nombre && !characters.some(element => element.nombre === character.nombre)){
      const random = Math.floor(Math.random() * 4);
      const charactersCopy =  [...characters];
      charactersCopy[random] = character;
      console.log(charactersCopy)
      setCharacters(charactersCopy);
    }
  }, [character, characters])

  return (
    <>
      <div>
        <img src="/the_simpsons_logo.png" className="logo" alt="The Simpsons logo" 
          style = {{ height: game ? '6em' : '14em'}} 
        />
      </div>
      <h1 style = {{ fontSize: game ? '2em' : '5em'}}>¿Quién lo dijo?</h1>
      <div className="card">
        <button onClick={() => setGame(true)}>
          START
        </button>
        { game &&
          <button onClick={() => {fetchQuote()}}>
            NEXT
          </button>
        }
        <div>
          { game && 
            <div>
              <Game
                quote={quote}
                characters = {characters}
              />
            </div>
          } 
        </div>
      </div>
      <p className="read-the-docs">
        Developed by Tur
      </p>
    </>
  )
}

export default App
