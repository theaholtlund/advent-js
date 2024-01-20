// Advent JavaScript 2023, Day 16

/**
 * Challenge: Friday deployment
 * Objective: Convert Christmas tree array into an object, handling null values and maintaining relationships
 *
 * @param {Array<number|null>} tree - The array representing the Christmas tree
 * @return {Object|null} - The transformed Christmas tree object
 */
function transformTree(tree) {
  let currentIndex = 0;

  const buildTree = () => {
    if (currentIndex >= tree.length || tree[currentIndex] === null) {
      return null;
    }

    const currentNode = {
      value: tree[currentIndex],
      left: (() => {
        currentIndex = 2 * currentIndex + 1;
        const leftSubtree = buildTree();
        currentIndex = (currentIndex - 1) / 2; // Reset index after processing left subtree
        return leftSubtree;
      })(),
      right: (() => {
        currentIndex = 2 * currentIndex + 2;
        const rightSubtree = buildTree();
        currentIndex = (currentIndex - 2) / 2; // Reset index after processing right subtree
        return rightSubtree;
      })(),
    };

    return currentNode;
  };

  return buildTree();
}
