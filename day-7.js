// Advent JavaScript 2023, Day 7

/**
 * Challenge: The 3D boxes
 * Objective: Generate drawing of 3D gift using ASCII characters, given integer size and symbol for faces
 *
 * @param {number} size - Integer representing size of the 3D gift
 * @param {string} symbol - Character representing symbol used for faces of the 3D gift
 * @return {string} - String representing ASCII art of the 3D gift
 */
function drawGift(size, symbol) {
  const wrapper = "#";
  const space = " ";

  // If the size is 1 or less, return a simple wrapper
  if (size <= 1) return `${wrapper}\n`;

  // Initialise an empty string to store the ASCII art of the 3D gift
  let gift = "";

  // Arrays to store the top and bottom parts of the gift
  const top = [space.repeat(size - 1) + wrapper.repeat(size)];
  const bottom = [`${wrapper.repeat(size)}`];

  // Middle part of the gift with symbols
  const middle =
    `${wrapper.repeat(size)}${symbol.repeat(Math.abs(size - 2))}` +
    `${wrapper}\n`;

  // Loop to generate top and bottom parts of the gift
  for (let i = 1; i < size; i++) {
    // Construct line for each iteration
    const line =
      `${wrapper}${symbol.repeat(size - 2)}${wrapper}` +
      `${symbol.repeat(i - 1)}${wrapper}`;

    // Add lines to the top and bottom arrays
    top.push(space.repeat(size - i - 1) + line);
    bottom.push(line);
  }

  // Combine and assemble top and bottom parts to construct 3D gift
  top.pop();
  bottom.pop();
  top.push(middle);
  bottom.reverse();

  // Concatenate top and bottom arrays, join with line breaks and add newline to end
  gift = `${top.join("\n")}${bottom.join("\n")}\n`;

  return gift;
}
