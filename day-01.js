// Advent JavaScript 2023, Day 1

/**
 * Challenge: First gift repeated
 * Objective: Find first repeated identification number, where second occurrence has smallest index
 *
 * @param {number[]} gifts - Array of identification numbers
 * @returns {number} - The first repeated identification number, or -1 if none is found
 */
function findFirstRepeated(gifts) {
  // Initialise object to store indices of visited numbers
  const indices = {};

  for (let i = 0; i < gifts.length; i++) {
    const currentNumber = gifts[i];

    // Check if current number has been visited before, if not, store index
    if (indices[currentNumber] !== undefined) {
      return currentNumber;
    } else {
      indices[currentNumber] = i;
    }
  }

  return -1;
}
