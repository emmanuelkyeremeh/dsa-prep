//requires revision for deeper understanding
var insert = function (intervals, newInterval) {
  intervals.push(newInterval);

  intervals.sort((a, b) => a[0] - b[0]);

  let result = [];

  result.push(intervals[0]);

  for (let i = 1; i < intervals.length; i++) {
    let len = result.length - 1;

    if (result[len][1] >= intervals[i][0]) {
      result[len][1] = Math.max(result[len][1], intervals[i][1]);
    } else {
      result.push(intervals[i]);
    }
  }

  return result;
};
