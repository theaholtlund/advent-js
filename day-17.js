// Advent JavaScript 2023, Day 17

/**
 * Challenge: Optimising the rental
 * Objective: Merge overlapping time intervals for sled rentals and return sorted array of optimised intervals
 *
 */
function optimizeIntervals(intervals) {
  if (intervals.length <= 1) {
    return intervals;
  }

  // Sort intervals based on the start time
  intervals.sort((a, b) => a[0] - b[0]);

  const mergedIntervals = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const currentInterval = intervals[i];
    const lastMergedInterval = mergedIntervals[mergedIntervals.length - 1];

    if (currentInterval[0] <= lastMergedInterval[1]) {
      // Overlapping intervals, merge them
      lastMergedInterval[1] = Math.max(
        lastMergedInterval[1],
        currentInterval[1]
      );
    } else {
      // Non-overlapping intervals, add to result
      mergedIntervals.push(currentInterval);
    }
  }

  return mergedIntervals;
}
