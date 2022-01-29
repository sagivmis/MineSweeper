import "./App.css";
import Board from "../Board/Board";
import { useState } from "react";
import Score from "../Score/Score";
import Result from "../Result/Result";

function App() {
    const [numCellsClicked, setNumCellsClicked] = useState(0);
    const [win, setWin] = useState(false);
    const [showRes, setShowRes] = useState(false);

    return (
        <div className='App'>
            <Score score={numCellsClicked} />
            <Board
                numCellsClicked={numCellsClicked}
                setNumCellsClicked={setNumCellsClicked}
                win={win}
                setWin={setWin}
                setShowRes={setShowRes}
            />
            {showRes && <Result win={win} />}
        </div>
    );
}

export default App;
