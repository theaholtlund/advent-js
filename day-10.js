// Advent JavaScript 2023, Day 10

/**
 * Challenge: Create your own Christmas tree
 * Objective: Create Christmas tree given string to form tree and number that indicates its height
 *
 * @param {string} ornaments - The string representing the ornaments of the tree
 * @param {number} height - The height of the Christmas tree as an integer
 * @returns {string} - A multiline string representing the Christmas tree
 */
function createChristmasTree(ornaments, height) {
  let tree = "";
  let currentPosition = 0;

  for (let tier = 1; tier <= height; tier++) {
    const padding = " ".repeat(height - tier);
    let tierOrnaments = "";

    for (let i = 0; i < tier; i++) {
      tierOrnaments += ornaments[(currentPosition + i) % ornaments.length];

      if (i < tier - 1) {
        tierOrnaments += " ";
      }
    }

    tree += `${padding}${tierOrnaments}\n`;

    currentPosition = (currentPosition + tier) % ornaments.length;
  }

  return tree + " ".repeat(height - 1) + "|\n";
}
