// Advent JavaScript 2023, Day 13

/**
 * Challenge: Calculating the time
 * Objective: Return time difference between 07:00:00 and duration of Christmas Eve deliveries
 *
 * @param {string[]} deliveries - Array of strings representing the duration of each delivery
 * @return {string} - The time difference between 07:00:00 and the total duration of deliveries
 */
function calculateTime(deliveries) {
  let seconds = -(7 * 3600);

  // Iterate through each delivery duration and update the total seconds
  for (const delivery of deliveries) {
    const [hours, minutes, secs] = delivery.split(":");
    seconds += +hours * 3600 + +minutes * 60 + +secs;
  }

  // Determine sign for remaining time (negative if exceeding 07:00:00, otherwise positive)
  const sign = seconds < 0 ? "-" : "";
  seconds = Math.abs(seconds);

  // Calculate hours, minutes, and seconds from the remaining seconds
  const hours = Math.floor(seconds / 3600)
    .toString()
    .padStart(2, "0");

  seconds %= 3600;

  const minutes = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0");

  seconds %= 60;

  const secs = seconds.toString().padStart(2, "0");

  // Return formatted result with sign, hours, minutes and seconds
  return `${sign}${hours}:${minutes}:${secs}`;
}
