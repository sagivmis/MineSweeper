import React, { useEffect, useRef, useContext, useCallback } from "react"
import { useState } from "react/cjs/react.development"
import "./Cell.css"
import { IoFlagSharp } from "react-icons/io5"
import { FaBomb } from "react-icons/fa"

const Cell = ({
  rowNumber,
  columnNumber,
  value,
  cellClicked,
  setShowRes,
  gameIsReset,
  setFlaggedCells,
  flaggedCells,
  setShouldStart,
  setMiliseconds,
  resetCellsClickedObj,
  setCellsClicked,
  endMineSweeperGame,
  setEndMineSweeperGame,
  setWin
}) => {
  const [clicked, setClicked] = useState(false)
  const [flag, setFlag] = useState(false)
  const [cellClass, setCellClass] = useState("cell")

  const handleRightClick = (e) => {
    e.preventDefault()
    if (!clicked)
      if (flag) {
        unflagged()
      } else {
        flagged()
      }
  }

  const flagged = () => {
    setFlag(true)
    setFlaggedCells(flaggedCells + 1)
  }

  const unflagged = () => {
    setFlag(false)
    setFlaggedCells(flaggedCells - 1)
  }

  const handleClick = ({ target }) => {
    if (flag) return
    setCellClass("cell clicked")
    setClicked(true)
    if (!clicked) cellClicked(target.id)
    if (!endMineSweeperGame) {
      if (value === "" && target.id === `${rowNumber}_${columnNumber}`)
        clickAdjacentCells(target, rowNumber, columnNumber)
      if (value === "*" && !flag) endGame(target)
    }
  }

  const clickAdjacentCells = (target, row, col) => {
    target.id = `${row}_${col}_`
    const rowList = [row - 1, row, row + 1]
    const colList = [col - 1, col, col + 1]
    for (let i of rowList) {
      for (let j of colList) {
        if (document.getElementById(`${i}_${j}`))
          document.getElementById(`${i}_${j}`).click()
      }
    }
    return
  }

  const endGame = (target) => {
    endMineSweeperGame = true
    const cols = target.parentElement.children.length
    const rows = target.parentElement.parentElement.children.length
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (document.getElementById(`${i}_${j}`)) {
          document.getElementById(`${i}_${j}`).click()
        }
      }
    }
    setWin(false)
    setShowRes(true)
  }

  const resetGame = useCallback(() => {
    setClicked(false)
    setCellClass("cell")
    setFlag("")
    setFlaggedCells(0)
    const idNumbers = cellRef.current.id.split("_")
    cellRef.current.id = `${idNumbers[0]}_${idNumbers[1]}`
    resetCellsClickedObj()
    setShowRes(false)
    setShouldStart(false)
    setMiliseconds(0)
    setEndMineSweeperGame(false)
  }, [
    resetCellsClickedObj,
    setEndMineSweeperGame,
    setFlaggedCells,
    setMiliseconds,
    setShouldStart,
    setShowRes
  ])

  useEffect(() => {
    if (gameIsReset === true) {
      resetGame()
    }
  }, [gameIsReset, resetGame, setFlaggedCells])

  const cellRef = useRef()
  return (
    <div
      id={`${rowNumber}_${columnNumber}`}
      className={cellClass}
      onClick={handleClick}
      onContextMenu={handleRightClick}
      ref={cellRef}
    >
      {clicked && !flag && value ? value === "*" ? <FaBomb /> : value : value}
      {flag ? <IoFlagSharp /> : ""}
    </div>
  )
}

export default Cell
