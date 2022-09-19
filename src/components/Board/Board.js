import React, { useState, useEffect, useContext, useCallback } from "react"

import Row from "../Row/Row"
import Button from "../Button/Button"
import globalContext from "../../context/globalContext"

import "./Board.css"

import {
  nestedArray,
  populateNestedArray,
  valueAdjacentCount
} from "../../helper/helper"

import Info from "../Info/Info"

const Board = ({ rows, columns, bombs }) => {
  const [board, setBoard] = useState()
  const [cellsClicked, setCellsClicked] = useState({})
  const [safeCells, setSafeCells] = useState(rows * columns - bombs)
  const {
    numCellsClicked: [, setNumCellsClicked],
    win: [, setWin],
    setShowRes
  } = useContext(globalContext)

  const [gameIsReset, setGameIsReset] = useState(false)
  const [flaggedCells, setFlaggedCells] = useState(0)

  const handleCellClick = (id) => {
    if (!cellsClicked[id]) {
      setCellsClicked((prev) => {
        return { ...prev, [id]: true }
      })
    }
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
    if (Object.keys(cellsClicked).length < safeCells)
      setNumCellsClicked(Object.keys(cellsClicked).length)

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
        <Info bombCount={bombs} flaggedCells={flaggedCells} bombs={bombs} />
      )}
      {board &&
        board.map((row, index) => {
          return (
            <Row
              key={index}
              row={row}
              rowNumber={index}
              handleCellClick={handleCellClick}
              setShowRes={setShowRes}
              gameIsReset={gameIsReset}
              setFlaggedCells={setFlaggedCells}
              flaggedCells={flaggedCells}
            />
          )
        })}
      <Button
        content={"RESTART"}
        size={"small"}
        onClick={() => {
          restartGame()
        }}
        color='#282c34'
      />
    </div>
  )
}

export default Board
