// Advent JavaScript 2023, Day 21

/**
 * Challenge: Binary message
 * Objective: Pinpoint longest segment in a binary message array with equal count of 0s and 1s, aiding elves in decoding messages from Mars for potential communication via https://mars.codes
 *
 */
function findBalancedSegment(message) {
  let longestSegment = [0, 0];

  message.forEach((binary, i) => {
    let ones = binary;
    let zeros = +(binary === 0);
    let currentSegment = [i, i];

    message.slice(i + 1).forEach((number, j) => {
      ones += number;
      zeros += +(number === 0);

      if (ones === zeros) {
        currentSegment[1] = j + i + 1;
      }
    });

    if (
      currentSegment[1] - currentSegment[0] >
      longestSegment[1] - longestSegment[0]
    ) {
      longestSegment = [...currentSegment];
    }
  });

  return longestSegment[1] === 0 ? [] : longestSegment;
}
