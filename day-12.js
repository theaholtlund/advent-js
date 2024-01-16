// Advent JavaScript 2023, Day 12

/**
 * Challenge: Is it a valid copy?
 * Objective: Detect if a letter is a copy of another with degradation
 *
 * @param {string} original - The supposed original letter
 * @param {string} copy - The copy letter to be checked
 * @returns {boolean} - True if the copy is a valid copy of the original, false otherwise
 */
function checkIsValidCopy(original, copy) {
  // Define the order in which characters can degrade
  const degradationOrder = ["a-z", "#", "+", ":", "."];

  // Iterate through each character in the original and copy letters
  for (let i = 0; i < original.length; i++) {
    const originalChar = original[i];
    const copyChar = copy[i];

    // Flag to track if characters are considered valid or degrading
    let isValid = false;

    // Check if characters are degrading according to the specified order
    for (const degradationType of degradationOrder) {
      if (
        degradationType.includes(originalChar.toLowerCase()) &&
        degradationType.includes(copyChar.toLowerCase())
      ) {
        isValid = true;
        break;
      }
    }

    // If characters are not valid or equal, return false
    if (!isValid && originalChar !== copyChar) {
      return false;
    }
  }

  // If all characters are valid, return true
  return true;
}
