import React from "react";
import Cell from "../Cell/Cell";
import "./Row.css";

const Row = ({ row, rowNumber, handleCellClick }) => {
    return (
        <div className='row'>
            {row.map((item, index) => {
                return (
                    <Cell
                        key={index}
                        rowNumber={rowNumber}
                        columnNumber={index}
                        value={item}
                        cellClicked={handleCellClick}
                    />
                );
            })}
        </div>
    );
};

export default Row;
