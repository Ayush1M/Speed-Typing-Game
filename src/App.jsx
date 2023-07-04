import React from "react";
import useWordGame from '../src/components/useWordGame'

export default function App() {

  const {text,
        timeRemaining, 
        isTimeRunning, 
        inputRef, 
        wordCount,
        handleChange, 
        startGame} = useWordGame()
  

  return (
    <div>
      
    <main>
      <div className="container">
        <h1 className="heading">How fast do you type?</h1>

        <textarea 
        onChange={handleChange} 
        disabled = {!isTimeRunning} 
        value={text}
        ref={inputRef} 
        />

        <h2 className="title">Time remaining : {timeRemaining}</h2>

        <button 
        className="btn" 
        onClick={startGame} 
        disabled={isTimeRunning} 
        >Start</button>

        <h2 className="word-count">Word Count : {wordCount}</h2>
      </div>
      </main>
    </div>
    );
}
