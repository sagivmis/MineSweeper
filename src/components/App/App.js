import "./App.css"
import Board from "../Board/Board"
import { useState } from "react"
import Score from "../Score/Score"
import Result from "../Result/Result"
import GlobalContext from "../../context/globalContext"
import Button from "../Button/Button"
import TextField from "@mui/material/TextField"

function App() {
  const numCellsClicked = useState(0)
  const win = useState(false)
  const [showRes, setShowRes] = useState(false)
  const [showBoard, setShowBoard] = useState(false)

  const [rows, setRows] = useState(0)
  const [columns, setColumns] = useState(0)
  const [bombs, setBombs] = useState(0)

  const handleBombsChange = (e) => {
    setBombs(e.target.value)
  }

  const handleRowsChange = (e) => {
    setRows(e.target.value)
  }

  const handleColumnsChange = (e) => {
    setColumns(e.target.value)
  }

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
        {/* {showBoard && <Score />} */}
        {!showBoard && (
          <div className='control'>
            <Button
              content={"OK"}
              size={"small"}
              onClick={() => {
                setShowBoard(isBoardSet)
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
          </div>
        )}
        {showBoard && <Board rows={rows} columns={columns} bombs={bombs} />}
        {showRes && <Result />}
      </div>
    </GlobalContext.Provider>
  )
}

export default App
