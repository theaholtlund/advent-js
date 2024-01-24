// Advent JavaScript 2023, Day 20

/**
 * Challenge: Distribute the weight
 * Objective: Adjust distribution matrix by replacing each element with rounded average of itself and its non-diagonal neighbors
 *
 * @param {number[][]} weights - The matrix representing the distribution of toys
 * @return {number[][]} - The adjusted matrix
 */
function distributeGifts(weights) {
  // Result matrix to store the adjusted values
  const result = [];

  for (let y = 0; y < weights.length; y++) {
    // Current row and neighboring rows
    const weightRow = weights[y];
    const topRow = weights[y - 1] || [];
    const bottomRow = weights[y + 1] || [];

    // Initialise the result row
    result[y] = [];

    for (let x = 0; x < weightRow.length; x++) {
      // Current weight and its non-diagonal neighbors
      const currentWeight = weightRow[x];
      const top = topRow[x] || 0;
      const bottom = bottomRow[x] || 0;
      const left = weightRow[x - 1] || 0;
      const right = weightRow[x + 1] || 0;

      // Count the number of valid neighbors
      const divisor = !!currentWeight + !!top + !!bottom + !!left + !!right;

      // Calculate the rounded average and update the result matrix
      const newValue = Math.round(
        (currentWeight + top + bottom + left + right) / divisor
      );
      result[y][x] = newValue;
    }
  }

  // Return the adjusted matrix
  return result;
}
