import React, { useEffect } from "react"
import "./timer.css"

const Timer = ({
  shouldStart,
  setShouldStart,
  numCellsClicked,
  miliseconds,
  setMiliseconds
}) => {
  useEffect(() => {
    if (numCellsClicked > 0) setShouldStart(true)
  }, [numCellsClicked, setShouldStart])

  useEffect(() => {
    let interval
    if (shouldStart) {
      interval = setInterval(() => {
        setMiliseconds((prev) => prev + 1)
      }, 10)
    }
    return () => {
      clearInterval(interval)
    }
  }, [setMiliseconds, setShouldStart, shouldStart])

  const totalTime = miliseconds / 100
  let minutes = Math.floor(totalTime / 60)
  let minutesDisplay = minutes < 10 ? `0${minutes}` : minutes
  let seconds = Math.floor(totalTime - minutes * 60)
  let secondsDisplay = seconds < 10 ? `0${seconds}` : seconds
  return (
    <div className='timer'>
      <p>Time:</p>
      {`${minutesDisplay}:${secondsDisplay}`}
    </div>
  )
}

export default Timer
