// Advent JavaScript 2023, Day 25

/**
 * Challenge: Calculating distances
 * Objective: Compute total travel distance to deliver gifts, given sequential positions on a map where each move equals 1 km
 *
 */
function travelDistance(map) {
  const rows = map.split("\n");
  let santaPosition = { x: -1, y: -1 };
  const childrenPosition = {};

  rows.forEach((row, y) => {
    row.split("").forEach((char, x) => {
      if (char === "S") {
        santaPosition = { x, y };
      } else if (!isNaN(parseInt(char))) {
        childrenPosition[char] = { x, y };
      }
    });
  });

  function calculateDistance(position1, position2) {
    return (
      Math.abs(position1.x - position2.x) + Math.abs(position1.y - position2.y)
    );
  }

  let totalDistance = 0;

  for (let i = 1; i <= Object.keys(childrenPosition).length; i++) {
    const childPosition = childrenPosition[i];
    if (childPosition) {
      totalDistance += calculateDistance(santaPosition, childPosition);
      santaPosition = childPosition;
    }
  }

  return totalDistance;
}
