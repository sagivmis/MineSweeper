import "./App.css";
import Board from "../Board/Board";
import { useState } from "react";
import Score from "../Score/Score";
import Result from "../Result/Result";
import GlobalContext from "../../context/globalContext";

function App() {
    const numCellsClicked = useState(0);
    const win = useState(false);
    const [showRes, setShowRes] = useState(false);

    return (
        <GlobalContext.Provider
            value={{
                win,
                setShowRes,
                numCellsClicked,
            }}
        >
            <div className='App'>
                <Score />
                <Board />
                {showRes && <Result />}
            </div>
        </GlobalContext.Provider>
    );
}

export default App;
