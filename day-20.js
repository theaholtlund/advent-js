// Advent JavaScript 2023, Day 20

/**
 * Challenge: Distribute the weight
 * Objective: Adjust distribution matrix by replacing each element with rounded average of itself and its non-diagonal neighbors
 *
 */
function distributeGifts(weights) {
  const numRows = weights.length;
  const numCols = weights[0].length;

  function getNeighbors(row, col) {
    const neighbors = [];
    if (row > 0) neighbors.push(weights[row - 1][col]);
    if (row < numRows - 1) neighbors.push(weights[row + 1][col]);
    if (col > 0) neighbors.push(weights[row][col - 1]);
    if (col < numCols - 1) neighbors.push(weights[row][col + 1]);
    return neighbors;
  }

  // Iterate through the matrix and update each element
  const result = [];
  for (let i = 0; i < numRows; i++) {
    const newRow = [];
    for (let j = 0; j < numCols; j++) {
      const currentElement = weights[i][j];
      if (currentElement === null) {
        // Handle null values by replacing them with the average of neighbors
        const neighbors = getNeighbors(i, j);
        const sum = neighbors.reduce(
          (acc, val) => (val !== null ? acc + val : acc),
          0
        );
        const average = sum / neighbors.filter((val) => val !== null).length;
        newRow.push(Math.round(average));
      } else {
        // Update the element with the rounded average of itself and neighbors
        const neighbors = getNeighbors(i, j);
        const average =
          (currentElement + neighbors.reduce((acc, val) => acc + val, 0)) /
          (neighbors.length + 1);
        newRow.push(Math.round(average));
      }
    }
    result.push(newRow);
  }

  return result;
}
