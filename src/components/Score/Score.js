import React, { useContext } from "react"
import "./Score.css"
import globalContext from "../../context/globalContext"

const Score = () => {
  const {
    numCellsClicked: [score]
  } = useContext(globalContext)
  return (
    <div className='score'>
      <h3 className='score-title'>YOUR SCORE IS: {score}</h3>
    </div>
  )
}

export default Score
