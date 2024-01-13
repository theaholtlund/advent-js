// Advent JavaScript 2023, Day 8

/**
 * Challenge: Sorting the Warehouse
 * Objective: Take string of gifts as argument and return string representing warehouse
 *
 * @param {string} gifts - The list of gifts to be organized
 * @returns {string} - The organized representation of the gifts
 */
function organizeGifts(gifts) {
  // Use regex to match quantities and symbols in the input string
  const matches = [...gifts.matchAll(/(\d+)([a-z])/g)];

  // Map each match to organised representation, then convert quantity to number
  return matches
    .map(([, quantity, symbol]) => {
      quantity = +quantity;

      // Calculate the number of pallets, boxes and bags for the current gift
      const pallets = `[${symbol}]`.repeat(Math.floor(quantity / 50));
      const boxes = `{${symbol}}`.repeat(Math.floor((quantity % 50) / 10));
      const bags = quantity % 10 > 0 ? `(${symbol.repeat(quantity % 10)})` : "";

      // Concatenate the pallets, boxes, and bags for the current gift
      // Join all the organised representations to form the final result
      return pallets + boxes + bags;
    })
    .join("");
}
