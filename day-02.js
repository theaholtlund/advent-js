/**
 * Challenge: We start the factory
 * Objective: Given gifts and available materials, return list of gifts that can be made
 *
 * @param {string[]} gifts - Array of gifts to be manufactured
 * @param {string[]} materials - Array of available materials
 * @returns {string[]} - List of gifts that can be made with the available materials
 */
function manufacture(gifts, materials) {
  // Initialise array to store the gifts that can be made
  const giftsMade = [];

  for (const gift of gifts) {
    let canMakeGift = true;

    for (let i = 0; i < gift.length; i++) {
      if (!materials.includes(gift[i])) {
        // Check if all materials for the current gift are available
        canMakeGift = false; // If any material is missing, set the flag to false
        break;
      }
    }

    if (canMakeGift) {
      giftsMade.push(gift);
    }
  }

  // Return the list of gifts that can be made
  return giftsMade;
}
