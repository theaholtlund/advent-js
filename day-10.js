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
  // Initialise empty string to build tree, and current position in ornaments string
  let tree = "";
  let currentPosition = 0;

  // Loop through each tier of the Christmas tree
  for (let tier = 1; tier <= height; tier++) {
    // Calculate padding to center ornaments, and initialise storage of current tier ornaments
    const padding = " ".repeat(height - tier);
    let tierOrnaments = "";

    // Append the current ornament to the tier
    for (let i = 0; i < tier; i++) {
      tierOrnaments += ornaments[(currentPosition + i) % ornaments.length];

      // Add a space between ornaments, except for last in tier
      if (i < tier - 1) {
        tierOrnaments += " ";
      }
    }

    // Concatenate tier ornaments with padding and newline to tree
    tree += `${padding}${tierOrnaments}\n`;

    // Update the currentPosition for the next tier
    currentPosition = (currentPosition + tier) % ornaments.length;
  }

  // Add trunk to bottom of tree with the correct padding
  return tree + " ".repeat(height - 1) + "|\n";
}
