/**
 * Challenge: Friday deployment
 * Objective: Convert tree array into object, handling null values and maintaining relationships
 *
 * @param {Array<number|null>} tree - The array representing the Christmas tree
 * @return {Object|null} - The transformed Christmas tree object
 */
function transformTree(tree) {
  // Initialise the index to traverse the tree array
  let currentIndex = 0;

  // Recursive function to build the Christmas tree object
  const buildTree = () => {
    if (currentIndex >= tree.length || tree[currentIndex] === null) return null;

    // Destructure the result of the recursive calls to build left and right subtrees
    const { value, left, right } = (() => {
      currentIndex = 2 * currentIndex + 1;
      const left = buildTree();
      currentIndex = (currentIndex - 1) / 2; // Reset index after processing left subtree

      // Process the right subtree
      currentIndex = 2 * currentIndex + 2;
      const right = buildTree();
      currentIndex = (currentIndex - 2) / 2; // Reset index after processing right subtree

      // Return an object containing the value, left subtree, and right subtree
      return { value: tree[currentIndex], left, right };
    })();

    // Return the current node of Christmas tree
    return { value, left, right };
  };

  // Start building Christmas tree from the root
  return buildTree();
}
