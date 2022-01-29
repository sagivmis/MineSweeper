import React, { useState, useEffect } from "react";
import "./Result.css";

const Result = ({ win }) => {
    const [resClass, setResClass] = useState("result");

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
