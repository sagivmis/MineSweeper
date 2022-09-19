import React from "react"
import Cell from "../Cell/Cell"
import "./Row.css"

const Row = ({
  row,
  rowNumber,
  handleCellClick,
  setShowRes,
  gameIsReset,
  handleIncrease,
  handleDecrease,
  setFlaggedCells,
  flaggedCells
}) => {
  return (
    <div className='row'>
      {row.map((item, index) => {
        return (
          <Cell
            key={index}
            rowNumber={rowNumber}
            columnNumber={index}
            value={item}
            cellClicked={handleCellClick}
            setShowRes={setShowRes}
            gameIsReset={gameIsReset}
            handleDecrease={handleDecrease}
            handleIncrease={handleIncrease}
            flaggedCells={flaggedCells}
            setFlaggedCells={setFlaggedCells}
          />
        )
      })}
    </div>
  )
}

export default Row
