import { useState, useEffect } from 'react'
//const dotenv = require('dotenv');
import './App.css';
import Game from './components/game/game.component';

//dotenv.config()

function App() {
  const [game, setGame] = useState(false)

  const [quote, setQuote] = useState([])
  const [character, setCharacter] = useState([])
  const [characters, setCharacters] = useState([])
  const [points, setPoints] = useState(0)
  const [response, setResponse] = useState('')
  const [correct, setCorrect] = useState(false)

  const fetchQuote = async () => {
    const res = await fetch('http://localhost:5000/api/quote')
    const data = await res.json()
    setQuote(data)
  }

  const fetchCharacter = async ( alias ) => {
    if(!alias) return;
    const res = await fetch(`http://localhost:5000/api/character/${alias}`)
    const data = await res.json()
    setCharacter(data)
  }

  const fetchCharacters = async () => {
    const res = await fetch('http://localhost:5000/api/characters/4')
    const data = await res.json()
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

  const handleOnResponse = (alias) => {
    setResponse(alias);
    if(response === quote.character){
      setPoints(points + 1)
      setCorrect(true)
      document.getElementById('root').setAttribute(
        'style',
        'background-color: rgb(55, 255, 55); box-shadow: 100px rgb(5, 155, 5); transition: background-color 0.5s ease, box-shadow 0.5 ease; '
      )
      setTimeout(() => {
        document.getElementById('root').setAttribute(
          'style',
          ''
        )
      }, 1000);
      
    } else {
      setCorrect(false)
      document.getElementById('root').setAttribute(
        'style',
        'transition: background-color 0.5s ease, box-shadow 0.5 ease; background-color: indianred; box-shadow: 100px red;'
      )
      setTimeout(() => {      
        document.getElementById('root').setAttribute(
          'style',
          ''
        )
      }, 1000);
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
              setCorrect(false);
              fetchQuote()
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
