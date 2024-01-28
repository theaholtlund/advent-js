// Advent JavaScript 2023, Day 24

/**
 * Challenge: Jump on the stairs
 * Objective: List all possible jump sequences to ascend staircase within given maximum steps per jumps, in ascending order
 *
 * @param {number} steps - Total number of steps in the staircase
 * @param {number} maxJump - Maximum number of steps that can be jumped in a single jump
 * @returns {number[][]} - Array of arrays representing all possible jump sequences
 */
function getStaircasePaths(steps, maxJump) {
  const result = [];

  // Recursive function to find all possible jump sequences
  function findPaths(currentPath, remainingSteps) {
    // Base case: If there are no remaining steps, add current path to result
    if (remainingSteps === 0) {
      result.push(currentPath.slice());
      return;
    }

    // Iterate through all possible jump sizes
    for (let i = 1; i <= Math.min(maxJump, remainingSteps); i++) {
      // Add current jump size to the path
      currentPath.push(i);
      // Continue recursively with reduced number of remaining steps
      findPaths(currentPath, remainingSteps - i);
      // Backtrack by removing the last jump size
      currentPath.pop();
    }
  }

  // Start recursive process with empty path and total steps
  findPaths([], steps);

  return result;
}
