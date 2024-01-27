// Advent JavaScript 2023, Day 23

/**
 * Challenge: Christmas dinner
 * Objective: Group Christmas dishes by shared ingredients, ensuring alphabetical ordering and uniqueness in the menu
 *
 */
function organizeChristmasDinner(dishes) {
  const ingredientMap = {};

  // Populate ingredient map
  for (const dish of dishes) {
    const [dishName, ...ingredients] = dish;
    for (const ingredient of ingredients) {
      if (!ingredientMap[ingredient]) {
        ingredientMap[ingredient] = new Set();
      }
      ingredientMap[ingredient].add(dishName);
    }
  }

  // Filter out ingredients with less than 2 dishes
  const result = [];
  for (const ingredient in ingredientMap) {
    if (ingredientMap[ingredient].size > 1) {
      const sortedDishes = Array.from(ingredientMap[ingredient]).sort();
      result.push([ingredient, ...sortedDishes]);
    }
  }

  // Sort the result
  result.sort((a, b) => a[0].localeCompare(b[0]));

  return result;
}
