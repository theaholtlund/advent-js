// Advent JavaScript 2023, Day 7

/**
 * Challenge: The 3D Boxes
 * Objective: Generate a drawing of a 3D gift using ASCII characters, given an integer size and a symbol for the faces.
 *
 * @param {number} size - Integer representing the size of the 3D gift.
 * @param {string} symbol - Character representing the symbol used for the faces of the 3D gift.
 * @return {string} - String representing the ASCII art of the 3D gift.
 */
function drawGift(size, symbol) {
  let gift = "";

  for (let i = 0; i < size; i++) {
    gift +=
      " ".repeat(size - i - 1) +
      "#".repeat(i + 1) +
      symbol.repeat(size - i - 1) +
      "\n";
  }

  for (let i = size - 2; i >= 0; i--) {
    gift +=
      " ".repeat(size - i - 1) +
      "#".repeat(i + 1) +
      symbol.repeat(size - i - 1) +
      "\n";
  }

  return gift;
}
