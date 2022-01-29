import React, { useState, useEffect, useContext } from "react";
import "./Result.css";
import globalContext from "../../context/globalContext";

const Result = () => {
    const [resClass, setResClass] = useState("result");
    const {
        win: [win, setWin],
    } = useContext(globalContext);
    useEffect(() => {
        win ? setResClass("result win") : setResClass("result lose");
    }, []);

    return (
        <div className={resClass}>
            <div className='result-text'>{win ? "YOU WIN!" : "YOU LOSE!"}</div>
        </div>
    );
};

export default Result;
