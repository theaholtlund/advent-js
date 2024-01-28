// Advent JavaScript 2023, Day 24

/**
 * Challenge: Jump on the stairs
 * Objective: List all possible jump sequences to ascend a staircase within a given maximum, in ascending order
 *
 */
function getStaircasePaths(steps, maxJump) {
  const result = [];

  // Recursive function to find all possible jump sequences
  function findPaths(currentPath, remainingSteps) {
    // Base case: if there are no remaining steps, add the current path to the result
    if (remainingSteps === 0) {
      result.push(currentPath.slice());
      return;
    }

    // Iterate through all possible jump sizes
    for (let i = 1; i <= Math.min(maxJump, remainingSteps); i++) {
      // Add the current jump size to the path
      currentPath.push(i);
      // Recur with the reduced number of remaining steps
      findPaths(currentPath, remainingSteps - i);
      // Backtrack by removing the last jump size
      currentPath.pop();
    }
  }

  // Start the recursive process with an empty path and total steps
  findPaths([], steps);

  return result;
}
