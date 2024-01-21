// Advent JavaScript 2023, Day 17

/**
 * Challenge: Optimising the rental
 * Objective: Merge overlapping time intervals for sled rentals and return sorted array of optimised intervals
 *
 */
function optimizeIntervals(intervals) {
  // Check if there are 1 or fewer intervals, no merging needed
  if (intervals.length <= 1) {
    return intervals;
  }

  // Sort intervals based on the start time
  intervals.sort((a, b) => a[0] - b[0]);

  // Initialise result array with the first interval
  const mergedIntervals = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    // Destructure current and previous interval for better readability
    const [start, end] = intervals[i];
    const [prevStart, prevEnd] = mergedIntervals[mergedIntervals.length - 1];

    // Check for overlapping intervals
    if (start <= prevEnd) {
      // Merge overlapping intervals by updating the end time directly
      mergedIntervals[mergedIntervals.length - 1][1] = Math.max(prevEnd, end);
    } else {
      // Non-overlapping intervals, add a new interval to the result array
      mergedIntervals.push([start, end]);
    }
  }

  // Return the sorted and merged intervals
  return mergedIntervals;
}
