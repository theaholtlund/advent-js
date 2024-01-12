// Advent JavaScript 2023, Day 5

/**
 * Challenge: Santa's CyberTruck
 * Objective: Create simulation of sled's movement, returning representation of the road state
 *
 * @param {string} road - The character currently on the road, could be '.', 'S', '|', or '*'.
 * @param {number} time - The given unit of time for the sled to simulate.
 * @return {string[]} - An array that gives the state of the road for each unit of time.
 */
function cyberReindeer(road, time) {
  const result = [road];
  let sledIndex = road.indexOf("S");
  let originalChar = ".";

  // Iterate for each unit of time, minus one, since the initial state is already included
  for (let i = 0; i < time - 1; i++) {
    let currentRoad = result[i];

    // On the fifth iteration (unit of time 5), all barriers open
    if (i === 4) {
      currentRoad = currentRoad.replace(/[|]/g, "*");
    }

    // Check if the next position of the sled is not a closed barrier
    // Then prepare the new sled position by combining previous and new character
    if (currentRoad[sledIndex + 1] !== "|") {
      const newSledIndex = `${originalChar}S`;

      // Update the character replaced by the sled before being replaced
      originalChar = currentRoad[sledIndex + 1];

      // Build the new state of the road with the sled moved one position
      const beginningRoad = currentRoad.substring(0, sledIndex);
      const endRoad = currentRoad.substring(sledIndex + 2);
      currentRoad = beginningRoad + newSledIndex + endRoad;

      // Update the sled position
      sledIndex += 1;
    }

    // Add the updated state of the road to the array
    result.push(currentRoad);
  }

  // Return the array with the state of the road at each unit of time
  return result;
}
