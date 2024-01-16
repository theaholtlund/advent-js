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
  const degradationOrder = ["a-z", "#", "+", ":", "."];

  for (let i = 0; i < original.length; i++) {
    const originalChar = original[i];
    const copyChar = copy[i];

    let isValid = false;

    for (const degradationType of degradationOrder) {
      if (
        degradationType.includes(originalChar) &&
        degradationType.includes(copyChar)
      ) {
        isValid = true;
        break;
      }
    }

    if (!isValid && originalChar.toLowerCase() !== copyChar.toLowerCase()) {
      return false;
    }
  }

  return true;
}
