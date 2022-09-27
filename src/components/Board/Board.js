import React, { useState, useEffect, useCallback } from "react"

import Cell from "../Cell/Cell"
import Button from "@mui/material/Button"

import "./Board.css"

import {
  nestedArray,
  populateNestedArray,
  valueAdjacentCount
} from "../../helper/helper"

const Board = ({
  rows,
  columns,
  bombs,
  setShouldStart,
  setMiliseconds,
  endMineSweeperGame,
  setEndMineSweeperGame,
  numCellsClicked,
  setNumCellsClicked,
  win,
  setWin,
  setShowRes
}) => {
  const [board, setBoard] = useState()
  const [cellsClicked, setCellsClicked] = useState({})
  const [safeCells, setSafeCells] = useState(rows * columns - bombs)

  const [gameIsReset, setGameIsReset] = useState(false)
  const [flaggedCells, setFlaggedCells] = useState(0)

  const handleCellClick = (id) => {
    if (!cellsClicked[id]) {
      setCellsClicked((prev) => {
        if (gameIsReset) return { [id]: true }
        return { ...prev, [id]: true }
      })
    }
  }

  const resetCellsClickedObj = () => {
    setCellsClicked({})
  }

  const handler = () => {
    restartGame()
  }

  const restartGame = useCallback(() => {
    setBoard(
      valueAdjacentCount(
        populateNestedArray(nestedArray(rows, columns), "*", bombs),
        "*"
      )
    )
    setGameIsReset(true)
    setTimeout(() => {
      setGameIsReset(false)
    }, 1000)
  }, [bombs, columns, rows])

  useEffect(handler, [rows, columns, bombs, restartGame])

  useEffect(() => {
    if (Object.keys(cellsClicked).length < safeCells) {
      setNumCellsClicked(Object.keys(cellsClicked).length)
    }

    if (Object.keys(cellsClicked).length === safeCells) {
      console.log("YOU WIN")
      setShowRes(true)
      setWin(true)
    }
    if (Object.keys(cellsClicked).length === rows * columns) {
      setShowRes(true)
    }
  }, [
    cellsClicked,
    columns,
    rows,
    safeCells,
    setNumCellsClicked,
    setShowRes,
    setWin
  ])

  return (
    <div className='board'>
      {board && (
        <div className='info'>
          <b>{bombs - flaggedCells}</b> bombs left !
        </div>
      )}
      {board &&
        board.map((row, rowNumber) => {
          return (
            <div className='row'>
              {row.map((item, columnNumber) => {
                return (
                  <Cell
                    key={columnNumber}
                    rowNumber={rowNumber}
                    columnNumber={columnNumber}
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
                    setWin={setWin}
                  />
                )
              })}
            </div>
          )
        })}

      <Button
        onClick={() => {
          restartGame()
        }}
        variant='contained'
        className='restart-btn'
      >
        RESTART
      </Button>
    </div>
  )
}

export default Board
