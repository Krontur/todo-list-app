import { useState, useEffect } from 'react'
//const dotenv = require('dotenv');
import './App.css';
import Game from './components/game/game.component';

//dotenv.config()

function App() {
  const [game, setGame] = useState(false)

  //fetch
  const [quote, setQuote] = useState('')
  const [character, setCharacter] = useState('')

  const fetchQuote = async () => {
      const response = await fetch('http://localhost:5000/api/quote')
      const data = await response.json()
      setQuote(data.quote)
      setCharacter(data.character)
  }

  useEffect(() => {
      fetchQuote()
  }, [])

  return (
    <>
      <div>
        <img src="/the_simpsons_logo.png" className="logo" alt="The Simpsons logo" />
      </div>
      <h1>Who said that?</h1>
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
