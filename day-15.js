// Advent JavaScript 2023, Day 15

/**
 * Challenge: Autonomous robot
 * Objective: Guide robots through warehouses, and return final state with the robot's position
 *
 * @param {string[]} store - Warehouse represented as an array of text strings
 * @param {string[]} movements - Array of movements for the robot (R, L, U, D)
 * @returns {string[]} - Array with the robot's final position
 */
function autonomousDrive(store, movements) {
  /**
   * Find the initial position of the robot in the warehouse
   *
   * @returns {number[]} - Array with the initial row and column of the robot
   */
  function findInitialPosition() {
    for (let row = 0; row < store.length; row++) {
      const col = store[row].indexOf("!");
      if (col !== -1) {
        return [row, col];
      }
    }
    return [-1, -1]; // Robot not found
  }

  // Find the initial position of the robot
  const [initialRow, initialCol] = findInitialPosition();

  // Simulate robot movements
  let currentRow = initialRow;
  let currentCol = initialCol;

  /**
   * Check if the next position is clear (not an obstacle or out of bounds)
   *
   * @param {number} row - Row index.
   * @param {number} col - Column index.
   * @returns {boolean} - True if the next position is clear, false otherwise
   */
  function isClear(row, col) {
    return (
      row >= 0 &&
      row < store.length &&
      col >= 0 &&
      col < store[row].length &&
      store[row][col] !== "*"
    );
  }

  // Simulate robot movements
  for (const movement of movements) {
    // Update robot position based on movement
    if (movement === "R" && isClear(currentRow, currentCol + 1)) {
      currentCol++;
    } else if (movement === "L" && isClear(currentRow, currentCol - 1)) {
      currentCol--;
    } else if (movement === "U" && isClear(currentRow - 1, currentCol)) {
      currentRow--;
    } else if (movement === "D" && isClear(currentRow + 1, currentCol)) {
      currentRow++;
    }
  }

  // Update the store with the final robot position
  store[initialRow] =
    store[initialRow].substring(0, initialCol) +
    "." +
    store[initialRow].substring(initialCol + 1);
  store[currentRow] =
    store[currentRow].substring(0, currentCol) +
    "!" +
    store[currentRow].substring(currentCol + 1);

  return store;
}
