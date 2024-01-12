// Advent JavaScript 2023, Day 6

/**
 * Challenge: The Reindeer on Trial
 * Objective: Find maximum distance the reindeer can travel in any direction.
 *
 * @param {string} movements - Characters representing the direction of reindeer's movement.
 * @return {number} - Value of the maximum distance that the reindeer can travel in any direction.
 */
function maxDistance(movements) {
  let leftCount = 0;
  let rightCount = 0;
  let anyDirectionCount = 0;

  // Iterate through each movement
  for (let move of movements) {
    if (move === ">") {
      rightCount++;
    } else if (move === "<") {
      leftCount++;
    } else if (move === "*") {
      anyDirectionCount++;
    }
  }

  // Calculate left and right difference, plus any direction count
  return Math.abs(leftCount - rightCount) + anyDirectionCount;
}
