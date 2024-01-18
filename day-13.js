// Advent JavaScript 2023, Day 13

/**
 * Challenge: Calculating the time
 * Objective: Return time difference between 07:00:00 and duration of Christmas Eve deliveries
 *
 * @param {string[]} deliveries - Array of strings representing the duration of each delivery
 * @return {string} - The time difference between 07:00:00 and the total duration of deliveries
 */
function calculateTime(deliveries) {
  // Convert delivery durations to seconds
  const totalSeconds = deliveries.reduce((acc, duration) => {
    const [hours, minutes, seconds] = duration.split(":").map(Number);
    return acc + hours * 3600 + minutes * 60 + seconds;
  }, 0);

  // Calculate remaining time in seconds
  const remainingSeconds = 7 * 3600 - totalSeconds;

  // Convert remaining time to HH:mm:ss format
  const hours = Math.floor(Math.abs(remainingSeconds) / 3600);
  const minutes = Math.floor((Math.abs(remainingSeconds) % 3600) / 60);
  const seconds = Math.abs(remainingSeconds) % 60;

  // Format the result
  const result =
    (remainingSeconds >= 0 ? "" : "-") +
    `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

  return result;
}
