// Advent JavaScript 2023, Day 4

// Challenge: Santa's CyberTruck
// Objective: Create a function that simulates the sled's movement and returns an array of strings representing the state of the road
function cyberReindeer(road, time) {
  const result = [road];

  for (let t = 1; t <= time; t++) {
    const currentRoad = result[t - 1].split("");

    // Move the sled to the right
    let sledIndex = currentRoad.indexOf("S");
    currentRoad[sledIndex] = ".";
    sledIndex = (sledIndex + 1) % currentRoad.length;
    currentRoad[sledIndex] = "S";

    // Check and open barriers every 5 units of time
    if (t % 5 === 0) {
      for (let i = 0; i < currentRoad.length; i++) {
        if (currentRoad[i] === "|") {
          currentRoad[i] = "*";
        }
      }
    }

    result.push(currentRoad.join(""));
  }

  return result;
}
