import React, { useContext } from "react";
import useWordGame from '../src/components/useWordGame'
import Header from "./components/Header";
import { ThemeContext } from "./components/ThemeContext";


export default function App() {

  const {theme} = useContext(ThemeContext)

  const {text,
        timeRemaining, 
        isTimeRunning, 
        inputRef, 
        wordCount,
        handleChange, 
        startGame} = useWordGame()
  

  return (
    <>
    <div className={`${theme}-theme`}>
    <Header />
    <main>
      <div className="container">
        <h1 className="heading">How fast do you type?</h1>

        <textarea 
        onChange={handleChange} 
        disabled = {!isTimeRunning} 
        value={text}
        ref={inputRef} 
        className={`${theme}-theme`}
        />

        <h2 className="title">Time remaining : {timeRemaining}</h2>

        <button 
        className={`btn ${theme}-theme`}
        onClick={startGame} 
        disabled={isTimeRunning} 
        >{timeRemaining=== 0 ? "Start Again" : "Start"}</button>

        <h2 className="word-count">Word Count : {wordCount}</h2>
      </div>
      </main>
    </div>
    </>
    );
}

export {ThemeContext}
