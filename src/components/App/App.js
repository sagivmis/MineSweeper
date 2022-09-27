import "./App.css"
import Board from "../Board/Board"
import { useState } from "react"
import Result from "../Result/Result"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import Timer from "../Timer/Timer"

function App() {
  const [numCellsClicked, setNumCellsClicked] = useState(0)
  const [win, setWin] = useState(false)
  const [showRes, setShowRes] = useState(false)
  const [showBoard, setShowBoard] = useState(false)

  const [rows, setRows] = useState(0)
  const [columns, setColumns] = useState(0)
  const [bombs, setBombs] = useState(0)
  const [shouldStart, setShouldStart] = useState(false)
  const [miliseconds, setMiliseconds] = useState(0)
  const [endMineSweeperGame, setEndMineSweeperGame] = useState(false)

  const handleBombsChange = (event) => {
    const bombCount = parseInt(event.target.value)
    setBombs(bombCount)
  }

  const handleRowsChange = (event) => {
    setRows(parseInt(event.target.value))
  }

  const handleColumnsChange = (event) => {
    setColumns(parseInt(event.target.value))
  }

  const [errorMessage, setErrorMessage] = useState()

  const isBoardSet = !!rows && !!columns && !!bombs
  return (
    <div className='App'>
      {showBoard && (
        <Timer
          shouldStart={shouldStart}
          setShouldStart={setShouldStart}
          numCellsClicked={numCellsClicked}
          miliseconds={miliseconds}
          setMiliseconds={setMiliseconds}
        />
      )}
      {!showBoard && (
        <div className='control'>
          <div className='error-message'>{errorMessage}</div>
          <Button
            variant='contained'
            className='begin-game-btn'
            onClick={() => {
              if (bombs < rows * columns) {
                setShowBoard(isBoardSet)
              } else {
                setErrorMessage("Please enter valid numbers")
              }
            }}
          >
            OK
          </Button>

          <TextField
            id='outlined-basic'
            label='Columns'
            variant='outlined'
            onChange={handleColumnsChange}
          />
          <TextField
            id='outlined-basic'
            label='Rows'
            variant='outlined'
            onChange={handleRowsChange}
          />
          <TextField
            id='outlined-basic'
            label='Bombs'
            variant='outlined'
            onChange={handleBombsChange}
          />
          <h4>Please insert values:</h4>
        </div>
      )}
      {showBoard && (
        <Board
          rows={rows}
          columns={columns}
          bombs={bombs}
          setShouldStart={setShouldStart}
          setMiliseconds={setMiliseconds}
          endMineSweeperGame={endMineSweeperGame}
          setEndMineSweeperGame={setEndMineSweeperGame}
          numCellsClicked={numCellsClicked}
          setNumCellsClicked={setNumCellsClicked}
          win={win}
          setWin={setWin}
          setShowRes={setShowRes}
        />
      )}
      {showRes && <Result win={win} />}
    </div>
  )
}

export default App
