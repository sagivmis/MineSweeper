import React, { useState, useEffect, useContext } from "react";

import Row from "../Row/Row";
import Button from "../Button/Button";
import globalContext from "../../context/globalContext";

import "./Board.css";

import {
    nestedArray,
    populateNestedArray,
    valueAdjacentCount,
} from "../../helper/helper";
import {
    MAPSIZE,
    BOMBCOUNT_EASY,
    BOMBCOUNT_NORMAL,
    BOMBCOUNT_HARD,
} from "./cfg";
import Info from "../Info/Info";

const Board = () => {
    const [mapSize] = useState(MAPSIZE);
    const [bombCount, setBombCount] = useState(BOMBCOUNT_NORMAL);
    const [board, setBoard] = useState();
    const [cellsClicked, setCellsClicked] = useState({});
    const [safeCells, setSafeCells] = useState(mapSize * mapSize - bombCount);
    const {
        numCellsClicked: [, setNumCellsClicked],
        win: [, setWin],
        setShowRes,
    } = useContext(globalContext);

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
            <Info bombCount={bombCount} />
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
                        setBombCount(BOMBCOUNT_HARD);
                        setSafeCells(MAPSIZE * MAPSIZE - BOMBCOUNT_HARD);
                    }}
                    color='#282c34'
                />
                <Button
                    content={"NORMAL"}
                    size={"small"}
                    onClick={() => {
                        setBombCount(BOMBCOUNT_NORMAL);
                        setSafeCells(MAPSIZE * MAPSIZE - BOMBCOUNT_NORMAL);
                    }}
                    color='#3e4451'
                />
                <Button
                    content={"EASY"}
                    size={"small"}
                    onClick={() => {
                        setBombCount(BOMBCOUNT_EASY);
                        setSafeCells(MAPSIZE * MAPSIZE - BOMBCOUNT_EASY);
                    }}
                    color='#545d6e'
                />
            </div>
        </div>
    );
};

export default Board;
