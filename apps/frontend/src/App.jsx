import { useState, useEffect } from 'react'
import './App.css';
import Game from './components/game/game.component';

function App() {
  const [game, setGame] = useState(false)

  const [quote, setQuote] = useState([])
  const [character, setCharacter] = useState([])
  const [characters, setCharacters] = useState([])
  const [points, setPoints] = useState(0)
  const [response, setResponse] = useState('')

  const VITE_BACKEND_PORT = import.meta.env.DEV ? `:${import.meta.env.VITE_BACKEND_PORT}` : "";
  const VITE_BACKEND_URI = import.meta.env.VITE_BACKEND_URI

  console.log(import.meta.env.VITE_BACKEND_URI)

  const fetchQuote = async () => {
    try {
      const res = await fetch(`${VITE_BACKEND_URI}${VITE_BACKEND_PORT}/api/quote`);
      if(!res.ok){
        throw new Error('Network response was not ok');
      }
      const data = await res.json()
      setQuote(data)
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
    }
  }

  const fetchCharacter = async ( alias ) => {
    if(!alias) return;
    try {
      const res = await fetch(`${VITE_BACKEND_URI}${VITE_BACKEND_PORT}/api/character/${alias}`)
      if(!res.ok){
        throw new Error('Network response was not ok');
      }
      const data = await res.json()
      setCharacter(data)
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
    }
  }

  const fetchCharacters = async () => {
    try {
      const res = await fetch(`${VITE_BACKEND_URI}${VITE_BACKEND_PORT}/api/characters/4`)
      if(!res.ok){
        throw new Error('Network response was not ok');
      }
      const data = await res.json()
      setCharacters(data)
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
    }
  }

  useEffect(() => {
    fetchQuote()
    fetchCharacters()
}, [])

  useEffect(() => {
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
  }, [character])

  const handleOnResponse = (alias) => {
    setResponse(alias);
    if(alias === quote.character){
      setPoints(points + 1)
    }
  }

  return (
    <>
      <div>
        <img src="/the_simpsons_logo.png" className="logo" alt="The Simpsons logo" 
          style = {{ height: game ? '6em' : '14em'}} 
        />
      </div>
      <h1 className = "title" style = {{ fontSize: game ? '2em' : '5em'}}>¿Quién lo dijo?</h1>
      <h2 className='contador' style = {{ display: game ? 'initial' : 'none' }}>Puntos: {points}</h2>
      <div className="card">
        <button onClick={() => {
          setGame(true);
          setPoints(0);
        }}>
          START
        </button>
        { game &&
          <button onClick={() => {
              setResponse('');
              fetchQuote();
              fetchCharacters();
            }}>
            NEXT
          </button>
        }
        <div className='game'>
          { game && 
            <div>
              <Game
                quote={quote}
                characters = {characters}
                onResponse = {handleOnResponse}
              />
            </div>
          } 
        </div>
      </div>
      <footer className="foot">
        Developed by Tur
      </footer>
    </>
  )
}

export default App
