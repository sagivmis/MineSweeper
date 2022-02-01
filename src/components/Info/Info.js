import React from "react";
import "./Info.css";

const Info = ({ bombCount = 0 }) => {
    return (
        <div className='info'>
            <b>{bombCount}</b> bombs to discover !
        </div>
    );
};

export default Info;
