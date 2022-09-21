import "./App.css"
import Board from "../Board/Board"
import { useState } from "react"
import Score from "../Score/Score"
import Result from "../Result/Result"
import GlobalContext from "../../context/globalContext"
import Button from "../Button/Button"
import TextField from "@mui/material/TextField"
import Timer from "../Timer/Timer"

function App() {
  const numCellsClicked = useState(0)
  const win = useState(false)
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
    <GlobalContext.Provider
      value={{
        win,
        setShowRes,
        numCellsClicked
      }}
    >
      <div className='App'>
        {showBoard && (
          <Timer
            shouldStart={shouldStart}
            setShouldStart={setShouldStart}
            numCellsClicked={numCellsClicked[0]}
            miliseconds={miliseconds}
            setMiliseconds={setMiliseconds}
          />
        )}
        {!showBoard && (
          <div className='control'>
            <div className='error-message'>{errorMessage}</div>
            <Button
              content={"OK"}
              size={"small"}
              onClick={() => {
                if (bombs < rows * columns) {
                  setShowBoard(isBoardSet)
                } else {
                  setErrorMessage("Please enter valid numbers")
                }
              }}
              color='#282c34'
            />

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
          />
        )}
        {showRes && <Result />}
      </div>
    </GlobalContext.Provider>
  )
}

export default App
