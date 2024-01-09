// Advent JavaScript 2023, Day 4

// Challenge: Turn the parentheses around
// Objective: Reverse the characters within each pair of parentheses, also removing the parentheses
function decode(message) {
  // Stack to keep track of characters before nested parentheses
  // Result string to store the current characters being processed
  let stack = [];
  let result = "";

  for (let char of message) {
    if (char === "(") {
      // Push current result and reset for nested parentheses
      stack.push(result);
      result = "";
    } else if (char === ")") {
      // Pop the result for the nested parentheses and reverse it
      result = stack.pop() + result.split("").reverse().join("");
    } else {
      // If no parentheses, continue to accumulate characters
      result += char;
    }
  }

  return result;
}
