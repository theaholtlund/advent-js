// Advent JavaScript 2023, Day 11

/**
 * Challenge: The studious elves
 * Objective: Determine if a palindrome can be formed by making at most one exchange of letters
 *
 * @param {string} word - The input word
 * @returns {Array} - If already a palindrome, return an empty array
 *                    If not possible to form palindrome, return null
 *                    If palindrome can be formed with one change, return array with the two indexes to swap
 */
function getIndexsForPalindrome(word) {
  const length = word.length;
  let oddCount = 0;
  let oddIndex = -1;

  // Count number of characters with odd frequency and track the last odd index
  const charCount = new Map();
  for (let i = 0; i < length; i++) {
    const char = word[i];
    charCount.set(char, (charCount.get(char) || 0) + 1);

    if (charCount.get(char) % 2 === 0) {
      oddCount--;
    } else {
      oddCount++;
      oddIndex = i;
    }
  }

  // Check if forming palindrome is possible
  if (oddCount > 1) {
    return null;
  }

  // If already palindrome
  if (oddCount === 0) {
    return [];
  }

  // If palindrome can be formed with one change
  return [oddIndex, oddIndex - 1];
}
