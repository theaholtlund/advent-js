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
    if (currentIndex >= tree.length || tree[currentIndex] === null) return null;

    const { value, left, right } = (() => {
      currentIndex = 2 * currentIndex + 1;
      const left = buildTree();
      currentIndex = (currentIndex - 1) / 2;
      currentIndex = 2 * currentIndex + 2;
      const right = buildTree();
      currentIndex = (currentIndex - 2) / 2;
      return { value: tree[currentIndex], left, right };
    })();

    return { value, left, right };
  };

  return buildTree();
}
