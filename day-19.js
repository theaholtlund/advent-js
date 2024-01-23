// Advent JavaScript 2023, Day 19

/**
 * Challenge: Face the sabotage
 * Objective: Modify a matrix, replacing safe cells with count of adjacent sabotaged toys
 *
 * @param {Array<Array<string>>} store - Input matrix representing Santa's toy warehouse
 * @returns {Array<Array<string>>} - Modified matrix with counts of adjacent sabotaged toys
 */
function revealSabotage(store) {
  const rows = store.length;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < store[i].length; j++) {
      // Check if the current cell is not a sabotaged toy
      if (store[i][j] !== "*") {
        let count = 0;

        // Check for adjacent sabotaged toys
        for (let x = Math.max(0, i - 1); x <= Math.min(i + 1, rows - 1); x++) {
          for (
            let y = Math.max(0, j - 1);
            y <= Math.min(j + 1, store[i].length - 1);
            y++
          ) {
            // Increment count if adjacent cell contains a sabotaged toy
            if (store[x][y] === "*") {
              count++;
            }
          }
        }

        // Update the current cell with the count if there are adjacent sabotaged toys
        if (count > 0) {
          store[i][j] = count.toString();
        }
      }
    }
  }

  // Return the modified matrix
  return store;
}
