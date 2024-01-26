/**
 * Challenge: We start the factory
 * Objective: Given gifts and available materials, return list of gifts that can be made
 *
 * @param {string[]} gifts - Array of gifts to be manufactured
 * @param {string[]} materials - Array of available materials
 * @returns {string[]} - List of gifts that can be made with the available materials
 */
function manufacture(gifts, materials) {
  const giftsMade = [];

  for (const gift of gifts) {
    let canMakeGift = true;

    for (let i = 0; i < gift.length; i++) {
      if (!materials.includes(gift[i])) {
        canMakeGift = false;
        break;
      }
    }

    if (canMakeGift) {
      giftsMade.push(gift);
    }
  }

  return giftsMade;
}
