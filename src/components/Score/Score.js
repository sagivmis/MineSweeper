import React from "react";
import "./Score.css";

const Score = ({ score }) => {
    return (
        <div className='score'>
            <h3 className='score-title'>YOUR SCORE IS: {score}</h3>
        </div>
    );
};

export default Score;
