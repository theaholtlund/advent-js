// Advent JavaScript 2023, Day 11

/**
 * Challenge: The studious elves
 * Objective: Determine if a palindrome can be formed by making at most one exchange of letters
 *
 * @param {string} word - The input word to check for palindromic properties
 * @return {number[] | null} - Returns array with two indices for palindrome creation or null if no such indices exist
 */
function getIndexsForPalindrome(word) {
  // Check if the given word is already a palindrome
  const isPalindrome = (s) => s === s.split("").reverse().join("");

  // If the word is already a palindrome, return an empty array
  if (isPalindrome(word)) {
    return [];
  }

  let result = null;

  // Iterate through all possible pairs of indices
  for (let i = 0; i < word.length; i++) {
    for (let j = i + 1; j < word.length; j++) {
      // Create a new word by swapping the characters at indices i and j
      const swappedWord = [...word];
      [swappedWord[i], swappedWord[j]] = [swappedWord[j], swappedWord[i]];

      // Check if the new word is a palindrome
      const mid = Math.floor(word.length / 2);
      const [left, right] = [
        swappedWord.slice(0, mid),
        swappedWord.slice(-mid).reverse(),
      ].map((arr) => arr.join(""));

      // If the new word is a palindrome, set the result and break out of the loops
      if (left === right) {
        result = [i, j];
        break;
      }
    }

    // Break out of the outer loop if a palindrome is found
    if (result) {
      break;
    }
  }

  // Return the result, either the indices or null
  return result;
}
