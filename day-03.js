// Advent JavaScript 2023, Day 3

// Challenge: The naughty elf
// Objective: Identify and return the first extra step that was added or removed in the chain
function findNaughtyStep(original, modified) {
  const minLength = Math.min(original.length, modified.length);

  // If original string is shorter, return modified[i] and vice versa
  for (let i = 0; i < minLength; i++) {
    if (original[i] !== modified[i]) {
      return original.length < modified.length ? modified[i] : original[i];
    }
  }

  // If no difference up to length of the shorter string, check length difference
  if (original.length < modified.length) {
    return modified[minLength];
  } else if (original.length > modified.length) {
    return original[minLength];
  }

  // If no difference is found, return an empty string
  return "";
}
