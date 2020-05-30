import React,{useState} from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [guessNumber,setGuessNumber]= useState("")
  const [message,setMessage]= useState("")
  const inputValue=(event)=>{
    const {value}=event.target
    setGuessNumber(value)
    
  }
  const startGame= async()=>{
    try {
      const {data} = await axios.get("http://localhost:3001/codebreaker/start")
      setMessage(data.message)
    } catch (error) {
      setMessage(error.response.data.error)
    }
  }
  const guessingNumnber= async(event)=>{
    event.preventDefault()
    try {
      const {data} = await axios.get(`http://localhost:3001/codebreaker/guessing?guess=${guessNumber}`)
      setMessage(data.result)
    } catch (error) {
      setMessage(error.response.data.error)
    }
  }
  return (
    <div className="App">
      <form className="form-codebreaker" onSubmit={guessingNumnber}>
        <input className="guess-number" onChange={inputValue} value={guessNumber} />
        <button className="btn-guess-number" type="submit">Guess number</button>
      </form>
      <button className="btn-start-game" onClick={startGame} >Start Game</button>
      <p>{message} </p>
    </div>
  );

}

export default App;
