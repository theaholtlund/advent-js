// Advent JavaScript 2023, Day 19

/**
 * Challenge: Face the sabotage
 * Objective: Modify a matrix, replacing safe cells with count of adjacent sabotaged toys
 *
 */
function revealSabotage(store) {
  const rows = store.length;
  const cols = store[0].length;

  function countAdjacentSabotages(row, col) {
    let count = 0;

    // Iterate over the neighbors of the current cell
    for (let i = Math.max(0, row - 1); i <= Math.min(row + 1, rows - 1); i++) {
      for (
        let j = Math.max(0, col - 1);
        j <= Math.min(col + 1, cols - 1);
        j++
      ) {
        if (store[i][j] === "*") {
          count++;
        }
      }
    }

    return count;
  }

  // Resultant matrix to store the modified values
  const result = [];

  // Iterate over each cell in the input matrix
  for (let i = 0; i < rows; i++) {
    const row = [];

    for (let j = 0; j < cols; j++) {
      // If the current cell contains a sabotaged toy, keep it as is
      if (store[i][j] === "*") {
        row.push("*");
      } else {
        const adjacentSabotages = countAdjacentSabotages(i, j);
        row.push(adjacentSabotages.toString());
      }
    }

    result.push(row);
  }

  return result;
}
