import React from "react"
import Cell from "../Cell/Cell"
import "./Row.css"

const Row = ({
  row,
  rowNumber,
  handleCellClick,
  setShowRes,
  gameIsReset,
  setFlaggedCells,
  flaggedCells,
  setShouldStart,
  setMiliseconds,
  setCellsClicked,
  endMineSweeperGame,
  setEndMineSweeperGame,
  resetCellsClickedObj
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
            flaggedCells={flaggedCells}
            setFlaggedCells={setFlaggedCells}
            setShouldStart={setShouldStart}
            setMiliseconds={setMiliseconds}
            resetCellsClickedObj={resetCellsClickedObj}
            setCellsClicked={setCellsClicked}
            endMineSweeperGame={endMineSweeperGame}
            setEndMineSweeperGame={setEndMineSweeperGame}
          />
        )
      })}
    </div>
  )
}

export default Row
