import React, { useState, useEffect } from "react";
import Row from "../Row/Row";
import "./Board.css";
import {
    nestedArray,
    populateNestedArray,
    valueAdjacentCount,
} from "../../helper/helper";
import Button from "../Button/Button";

const Board = ({ setNumCellsClicked, setWin, setShowRes }) => {
    const [mapSize] = useState(10);
    const [bombCount, setBombCount] = useState(10);
    const [board, setBoard] = useState();
    const [cellsClicked, setCellsClicked] = useState({});
    const [safeCells] = useState(mapSize * mapSize - bombCount);

    const handleCellClick = (id) => {
        if (!cellsClicked[id]) {
            setCellsClicked((prev) => {
                return { ...prev, [id]: true };
            });
        }
    };

    useEffect(() => {
        setBoard(
            valueAdjacentCount(
                populateNestedArray(
                    nestedArray(mapSize, mapSize),
                    "*",
                    bombCount
                ),
                "*"
            )
        );
        console.log(board);
    }, [bombCount]);

    useEffect(() => {
        if (Object.keys(cellsClicked).length < safeCells)
            setNumCellsClicked(Object.keys(cellsClicked).length);

        if (Object.keys(cellsClicked).length === safeCells) {
            console.log("YOU WIN");
            setShowRes(true);
            setWin(true);
        }
        if (Object.keys(cellsClicked).length === mapSize * mapSize) {
            setShowRes(true);
        }
    }, [cellsClicked, safeCells]);

    return (
        <div className='board'>
            {board &&
                board.map((row, index) => {
                    return (
                        <Row
                            key={index}
                            row={row}
                            rowNumber={index}
                            handleCellClick={handleCellClick}
                        />
                    );
                })}
            <div className='control'>
                <Button
                    content={"HARD"}
                    size={"small"}
                    onClick={() => {
                        setBombCount(25);
                    }}
                    color='#282c34'
                />
                <Button
                    content={"NORMAL"}
                    size={"small"}
                    onClick={() => {
                        setBombCount(10);
                    }}
                    color='#3e4451'
                />
                <Button
                    content={"EASY"}
                    size={"small"}
                    onClick={() => {
                        setBombCount(5);
                    }}
                    color='#545d6e'
                />
            </div>
        </div>
    );
};

export default Board;
