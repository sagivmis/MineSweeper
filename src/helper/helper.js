export function nestedArray(row, col, defaultItem = "") {
  const outerArray = []
  for (let i = 0; i < parseInt(row); i++) {
    const innerArray = []
    for (let j = 0; j < parseInt(col); j++) {
      innerArray.push(defaultItem)
    }
    outerArray.push(innerArray)
  }
  return outerArray
}

export function populateNestedArray(nestedArray, value, count) {
  const rows = nestedArray.length
  const cols = nestedArray[0].length
  while (count) {
    const y = floorRand(rows)
    const x = floorRand(cols)
    if (!nestedArray[y][x]) {
      nestedArray[y][x] = value
      count--
    }
  }
  return nestedArray
}

export function valueAdjacentCount(nestedArray, value) {
  const length = nestedArray[0].length
  for (let i = 0; i < nestedArray.length; i++) {
    for (let j = 0; j < length; j++) {
      if (nestedArray[i][j] === value) {
        nestedArray = addOneAdjacents(nestedArray, i, j, value)
      }
    }
  }
  return nestedArray
}

function addOneAdjacents(nestedArray, iIndex, jIndex, value) {
  const i = parseInt(iIndex)
  const j = parseInt(jIndex)
  const iAdjacents = [i - 1, i, i + 1]
  const jAdjacents = [j - 1, j, j + 1]

  iAdjacents.forEach((iAdj) => {
    if (nestedArray[iAdj])
      jAdjacents.forEach((jAdj) => {
        if (
          nestedArray[iAdj][jAdj] !== undefined &&
          nestedArray[iAdj][jAdj] !== value
        ) {
          if (typeof nestedArray[iAdj][jAdj] !== "number")
            nestedArray[iAdj][jAdj] = 0
          nestedArray[iAdj][jAdj]++
        }
      })
  })
  return nestedArray
}

function floorRand(value) {
  return Math.floor(Math.random() * value)
}
