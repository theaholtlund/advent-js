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
  for (let i = 0; i < original.length; i++) {
    // Define valid characters based on degradation order
    const validChars =
      (original[i].match(/[a-zA-Z]/)
        ? original[i] + original[i].toLowerCase()
        : "") + "#+:. ";

    // Check if the copy character is in a valid position in the degradation order
    if (validChars.indexOf(copy[i]) < validChars.indexOf(original[i])) {
      return false;
    }
  }

  // If all characters are valid, return true
  return true;
}
