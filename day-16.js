// Advent JavaScript 2023, Day 16

/**
 * Challenge: Friday deployment
 * Objective: Convert Christmas tree array into an object, handling null values and maintaining relationships
 *
 * @param {Array<number|null>} tree - The array representing the Christmas tree
 * @return {Object|null} - The transformed Christmas tree object
 */
function transformTree(tree) {
  /**
   * Helper function to recursively build the tree object.
   *
   * @param {number} index - Index of current node in the array
   * @return {Object|null} - The tree object for the current node
   */
  function buildTree(index) {
    if (index >= tree.length || tree[index] === null) {
      return null;
    }

    const currentNode = {
      value: tree[index],
      left: buildTree(2 * index + 1),
      right: buildTree(2 * index + 2),
    };

    return currentNode;
  }

  // Start building the tree from the root, at index 0
  return buildTree(0);
}
