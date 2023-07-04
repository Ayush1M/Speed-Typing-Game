import { useState, useEffect, useRef } from "react"

function WordGame(){

  const [text, setText] = useState("")
  const [timeRemaining, setTimeRemaining] = useState(15)
  const [isTimeRunning, SetIsTimeRunning] = useState(false)
  const [wordCount, setWordCount] = useState(0)
  const inputRef = useRef()

  useEffect(() =>{
    if(isTimeRunning && timeRemaining > 0){
      setTimeout(() =>{
        setTimeRemaining(time => time - 1)
      }, 1000)
    }  else if(timeRemaining === 0){
      endGame()
    }  
  }, [timeRemaining, isTimeRunning])


  function handleChange(e){
    const {value} = e.target
    setText(value)
  }

  function startGame(){
    SetIsTimeRunning(true)
    setTimeRemaining(15)
    setWordCount(0)
    setText("")
    inputRef.current.disabled = false
    inputRef.current.focus()
  }

  function endGame(){
    SetIsTimeRunning(false)
    setWordCount(calculateWordCount(text))
  }

  function calculateWordCount(text){
    const wordArr = text.trim().split(" ")
    const filteredWords = wordArr.filter(word => word !== "")
    return filteredWords.length
  }

  return {text, timeRemaining, isTimeRunning, inputRef, wordCount, handleChange, startGame}
}

export default WordGame