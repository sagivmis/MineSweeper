import React from "react"
import { useState } from "react/cjs/react.development"
import "./Cell.css"
import { IoFlagSharp } from "react-icons/io5"
import { FaBomb } from "react-icons/fa"

let endMineSweeperGame = false

const Cell = ({ rowNumber, columnNumber, value, cellClicked }) => {
  const [clicked, setClicked] = useState(false)
  const [flag, setFlag] = useState("")
  const [cellClass, setCellClass] = useState("cell")

  const handleRightClick = (e) => {
    e.preventDefault()
    if (!clicked) flag ? setFlag("") : setFlag("flag")
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
    target.style.backgroundColor = "black"
    const cols = target.parentElement.children.length
    const rows = target.parentElement.parentElement.children.length

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (document.getElementById(`${i}_${j}`)) {
          if (flag && value === "*")
            document.getElementById(`${i}_${j}`).style.backgroundColor = "green"
          document.getElementById(`${i}_${j}`).click()
        }
      }
    }
  }

  return (
    <div
      id={`${rowNumber}_${columnNumber}`}
      className={cellClass}
      onClick={handleClick}
      onContextMenu={handleRightClick}
    >
      {clicked && !flag && value ? value === "*" ? <FaBomb /> : value : ""}
      {flag ? <IoFlagSharp /> : ""}
    </div>
  )
}

export default Cell
