export function nestedArray(row, col, defaultItem = "") {
    let outerArray = [];
    for (let i = 0; i < parseInt(row); i++) {
        let innerArray = [];
        for (let j = 0; j < parseInt(col); j++) {
            innerArray.push(defaultItem);
        }
        outerArray.push(innerArray);
    }
    return outerArray;
}

export function populateNestedArray(nestedArray, value, count) {
    let rows = nestedArray.length;
    let cols = nestedArray[0].length;
    while (count) {
        let y = floorRand(rows);
        let x = floorRand(cols);
        if (!nestedArray[y][x]) {
            nestedArray[y][x] = value;
            count--;
        }
    }
    console.log(nestedArray);
    return nestedArray;
}

export function valueAdjacentCount(nestedArray, value) {
    let length = nestedArray[0].length;
    for (let i = 0; i < nestedArray.length; i++) {
        for (let j = 0; j < length; j++) {
            if (nestedArray[i][j] === value) {
                console.log(i, j);
                nestedArray = addOneAdjacents(nestedArray, i, j, value);
            }
        }
    }
    return nestedArray;
}

function addOneAdjacents(nestedArray, iIndex, jIndex, value) {
    let i = parseInt(iIndex);
    let j = parseInt(jIndex);
    console.log(i, j);
    let iAdjacents = [i - 1, i, i + 1];
    let jAdjacents = [j - 1, j, j + 1];

    // console.log(iAdjacents, jAdjacents);
    iAdjacents.forEach((iAdj) => {
        if (nestedArray[iAdj])
            jAdjacents.forEach((jAdj) => {
                if (
                    nestedArray[iAdj][jAdj] !== undefined &&
                    nestedArray[iAdj][jAdj] !== value
                ) {
                    if (typeof nestedArray[iAdj][jAdj] !== "number")
                        nestedArray[iAdj][jAdj] = 0;
                    console.log(iAdj, jAdj);
                    nestedArray[iAdj][jAdj]++;
                }
            });
    });
    return nestedArray;
}
function floorRand(value) {
    return Math.floor(Math.random() * value);
}
