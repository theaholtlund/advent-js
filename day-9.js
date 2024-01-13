// Advent JavaScript 2023, Day 9

/**
 * Challenge: Switch the lights
 * Objective: Given array of strings with light colours, return minimum number of light changes for colors to alternate
 *
 * @param {string[]} lights - The array of lights
 * @return {number} Number of changes needed to organise the lights
 */
function adjustLights(lights) {
  // Count changes starting with '🟢' as the first color
  let changesWithGreen = 0;
  let currentColor = "🟢";

  for (const light of lights) {
    if (light !== currentColor) {
      changesWithGreen++;
    }

    // Switch the current color
    currentColor = currentColor === "🔴" ? "🟢" : "🔴";
  }

  // Count changes starting with '🔴' as the first color
  let changesWithRed = 0;
  currentColor = "🔴";

  for (const light of lights) {
    if (light !== currentColor) {
      changesWithRed++;
    }

    // Switch the current color
    currentColor = currentColor === "🔴" ? "🟢" : "🔴";
  }

  // Return the minimum changes between the two scenarios
  return Math.min(changesWithGreen, changesWithRed);
}
