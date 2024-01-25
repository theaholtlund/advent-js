// Advent JavaScript 2023, Day 21

/**
 * Challenge: Binary message
 * Objective: Pinpoint longest segment in a binary message array with equal count of 0s and 1s, aiding elves in decoding messages from Mars for potential communication via https://mars.codes
 *
 */
function findBalancedSegment(message) {
  // Initialise variables to track the longest balanced segment
  let longestSegment = [0, 0];

  // Iterate through each element in the binary message
  message.forEach((binary, i) => {
    // Initialise counters for 0s and 1s, and the current segment
    let ones = binary;
    let zeros = +(binary === 0);
    let currentSegment = [i, i];

    // Check for balanced segments in the remaining part of the message
    message.slice(i + 1).forEach((number, j) => {
      // Update counters based on the current binary number
      ones += number;
      zeros += +(number === 0);

      // If a balanced segment is found, update the end index of the current segment
      if (ones === zeros) {
        currentSegment[1] = j + i + 1;
      }
    });

    // Update the longest segment if the current one is longer
    if (
      currentSegment[1] - currentSegment[0] >
      longestSegment[1] - longestSegment[0]
    ) {
      longestSegment = [...currentSegment];
    }
  });

  // Return the longest balanced segment or an empty array if none is found
  return longestSegment[1] === 0 ? [] : longestSegment;
}
