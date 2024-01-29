// Advent JavaScript 2023, Day 25

/**
 * Challenge: Calculating distances
 * Objective: Compute total travel distance to deliver gifts, given sequential positions on a map where each move equals 1 km
 *
 * @param {string} map - A multiline string representing map with sequential positions of Santa and children
 * @returns {number} The total travel distance in kilometers
 */
function travelDistance(map) {
  // Split the map into rows
  const rows = map.split("\n");
  // Initialise Santa's initial position and a dictionary to store children's positions
  let santaPosition = { x: -1, y: -1 };
  const childrenPosition = {};

  // Parse the map to find Santa's and children's positions
  rows.forEach((row, y) => {
    row.split("").forEach((char, x) => {
      if (char === "S") {
        santaPosition = { x, y }; // Update Santa's position if found
      } else if (!isNaN(parseInt(char))) {
        childrenPosition[char] = { x, y }; // Store children's positions
      }
    });
  });

  // Function to calculate distance between two positions
  function calculateDistance(position1, position2) {
    return (
      Math.abs(position1.x - position2.x) + Math.abs(position1.y - position2.y)
    );
  }

  // Initialise the total distance
  let totalDistance = 0;

  // Iterate over children positions and calculate distances
  for (let i = 1; i <= Object.keys(childrenPosition).length; i++) {
    const childPosition = childrenPosition[i];
    if (childPosition) {
      totalDistance += calculateDistance(santaPosition, childPosition);
      santaPosition = childPosition; // Update Santa's position for the next iteration
    }
  }

  return totalDistance;
}
