// Advent JavaScript 2023, Day 14

/**
 * Challenge: Avoid the alarm
 * Objective: Avoid consecutive houses to maximise gift delivery, by calculating total gifts possible
 *
 * @param {number[]} houses - Array of integers representing gifts in each house
 * @returns {number} - Maximum number of gifts Santa can deliver without setting off alarms
 */
function maxGifts(houses) {
  // Check if the array is empty
  if (houses.length === 0) {
    return 0;
  }

  // Initialise two variables to keep track of maximum gifts with and without current house
  let maxWithCurrentHouse = houses[0];
  let maxWithoutCurrentHouse = 0;

  // Iterate through houses starting from the second one
  for (let i = 1; i < houses.length; i++) {
    // Calculate the new maximum gifts with the current house
    const newMaxWithCurrentHouse = maxWithoutCurrentHouse + houses[i];

    // Update variable without current house to be the maximum of the previous two values
    maxWithoutCurrentHouse = Math.max(
      maxWithoutCurrentHouse,
      maxWithCurrentHouse
    );

    // Update variable to be the new maximum with the current house
    maxWithCurrentHouse = newMaxWithCurrentHouse;
  }

  // Return maximum of the two variables representing total gifts
  return Math.max(maxWithCurrentHouse, maxWithoutCurrentHouse);
}
