// Advent JavaScript 2023, Day 21

/**
 * Challenge: Binary message
 * Objective: Pinpoint longest segment in a binary message array with equal count of 0s and 1s, aiding elves in decoding messages from Mars for potential communication via https://mars.codes
 *
 */
function findBalancedSegment(message) {
  let longest = [];

  // Iterate through each element in the binary message
  message.forEach((binary, i) => {
    let ones = binary;
    let zeros = +(binary === 0);
    let current = [i, i];

    // Check for balanced segments in the remaining part of the message
    message.slice(i + 1).forEach((number, j) => {
      ones += number;
      zeros += +(number === 0);

      if (ones === zeros) {
        current[1] = j + i + 1;
      }
    });

    // Update the longest segment if the current one is longer
    if (current[1] - current[0] > longest[1] - longest[0]) {
      longest = [...current];
    }
  });

  // Return the longest balanced segment or an empty array if none is found
  return longest[1] === 0 ? [] : longest;
}
