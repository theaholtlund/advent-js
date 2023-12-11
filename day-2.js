// Advent JavaScript 2023, Day 2

// Challenge: We start the factory
// Objective: Write function that, given gifts and available materials, returns list of gifts that can be made
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
