// Advent JavaScript 2023, Day 22

/**
 * Challenge: Programming language
 * Objective: Create a compiler for Santa.js, a symbol-based language, modifying a counter value
 *
 * @param {string} code - The Santa.js code to be compiled
 * @returns {number} - The result of executing the compiled code
 */
function compile(code) {
  // Initialise counter to track the result of code execution
  let counter = 0;
  let returnIndex = null;

  // Evaluate symbols to update counter and return index accordingly
  for (let i = 0; i < code.length; i++) {
    counter += (code[i] === "+") - (code[i] === "-");
    counter *= (code[i] === "*") + 1;
    returnIndex = code[i] === "%" ? i : returnIndex;

    if (returnIndex !== null && code[i] === "<") {
      // Return to last '%' symbol's index if '<' symbol is encountered
      i = returnIndex;
      returnIndex = null;
    }

    // Skip conditional block if counter is non-positive and '¿' symbol is encountered
    if (counter <= 0 && code[i] === "¿") {
      const endIndex = code.indexOf("?", i + 1);
      if (endIndex !== -1) {
        i = endIndex;
      } else {
        break;
      }
    }
  }

  return counter;
}
