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

  // Iterate through the sorted intervals
  for (let i = 1; i < intervals.length; i++) {
    const currentInterval = intervals[i];
    const lastMergedInterval = mergedIntervals[mergedIntervals.length - 1];

    // Check for overlapping intervals
    if (currentInterval[0] <= lastMergedInterval[1]) {
      // Overlapping intervals, merge them by updating the end time
      lastMergedInterval[1] = Math.max(
        lastMergedInterval[1],
        currentInterval[1]
      );
    } else {
      // Non-overlapping intervals, add to the result array
      mergedIntervals.push(currentInterval);
    }
  }

  // Return the sorted and merged intervals
  return mergedIntervals;
}
