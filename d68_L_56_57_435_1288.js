/**   56. Merge Intervals  */
var merge = function (intervals) {
  intervals.sort(([a, b], [c, d]) => a - c);
  let res = [intervals[0]];
  let j = 0;
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] <= res[j][1]) {
      let merged = [res[j][0], Math.max(res[j][1], intervals[i][1])];
      res[j] = merged;
    } else {
      j++;
      res[j] = intervals[i];
    }
  }
  return res;
};
/** 57. Insert Interval   */
var insert = function (intervals, newInterval) {
  // find the left and right position
  let lPos,
    rPos,
    i = 0;
  // find the left
  while (i < intervals.length) {
    if (intervals[i][1] >= newInterval[0]) {
      lPos = i;
      break;
    }
    i++;
  }
  if (typeof lPos === "undefined") lPos = i;
  // find the right
  while (i < intervals.length) {
    if (intervals[i][1] >= newInterval[1]) {
      if (intervals[i][0] <= newInterval[1]) rPos = i;
      else rPos = i - 1;
      break;
    }
    i++;
  }
  if (typeof rPos === "undefined") rPos = i;
  if (lPos > rPos) {
    // shift towards right
    let len = intervals.length;

    let r = intervals[lPos];
    for (let i = lPos; i < len; i++) {
      let temp = intervals[i + 1];
      intervals[i + 1] = r;
      r = temp;
    }
    intervals[lPos] = newInterval;
  } else {
    let minLeft =
      lPos >= intervals.length
        ? newInterval[0]
        : Math.min(newInterval[0], intervals[lPos][0]);
    let maxLeft =
      rPos >= intervals.length
        ? newInterval[1]
        : Math.max(newInterval[1], intervals[rPos][1]);
    intervals[lPos] = [minLeft, maxLeft];
    // replace to right rpos
    let res = [];
    for (let i = 0; i <= lPos; i++) {
      res.push(intervals[i]);
    }
    for (let i = rPos + 1; i < intervals.length; i++) {
      res.push(intervals[i]);
    }
    intervals = res;
  }
  return intervals;
};

/** 435. Non-overlapping Intervals  */
var eraseOverlapIntervals = function (intervals) {
  intervals.sort(([a, b], [c, d]) => a - c);
  let j = 0;
  let count = 0;
  for (let i = 1; i < intervals.length; i++) {
    //overlap
    if (intervals[i][0] < intervals[j][1]) {
      count++;
      if (intervals[i][1] < intervals[j][1]) {
        j = i;
      }
    } else {
      j = i;
    }
  }
  return count;
};

/**  1288. Remove Covered Intervals */
var removeCoveredIntervals = function (intervals) {
  intervals.sort(([a, b], [c, d]) => a - c);
  let j = 0;
  // count of the covered intervals
  let count = 0;
  for (let i = 1; i < intervals.length; i++) {
    // if same then may be covered or 1,4,1,5,12
    if (intervals[j][0] === intervals[i][0]) {
      count++;
      if (intervals[j][1] < intervals[i][1]) j = i;
      continue;
    } else if (intervals[j][1] >= intervals[i][1]) {
      count++;
    } else {
      j = i;
    }
    // just update the highest one as current coverer
    // if not same check is the next one fall into
  }
  return intervals.length - count;
};
console.log(
  removeCoveredIntervals([
    [1, 4],
    [3, 6],
    [2, 8],
    [1, 9],
    [2, 7],
  ])
);
