/**-----74. Search a 2D Matrix------ */
var searchMatrix = function (matrix, target) {
  // does it fall into the range
  if (
    matrix[0][0] > target ||
    matrix[matrix.length - 1][matrix[matrix.length - 1].length - 1] < target
  )
    return false;
  let rLen = matrix.length,
    cLen = matrix[0].length;
  let s = 0,
    e = rLen * cLen - 1;
  let m;
  while (s <= e) {
    m = s + Math.floor((e - s) / 2);
    let row = Math.floor(m / cLen),
      col = m % cLen;
    let num = matrix[row][col];
    if (num === target) return true;
    else if (num > target) {
      e = m - 1;
    } else {
      s = m + 1;
    }
  }
  return false;
};

/** ---2811. Check if it is Possible to Split Array---- */

var canSplitArray = function (nums, m) {
  if (nums.length <= 2) return true;
  let memo = {};
  function split(s, e) {
    if (s === e) return true;
    if (memo[s + "," + e] !== undefined) return memo[s + "," + e];
    if (getTotal(s, e) < m) return false;
    let res = false;
    for (let i = s; i < e; i++) {
      let left = split(s, i);
      let right = split(i + 1, e);
      if (left && right) {
        res = true;
        break;
      }
    }
    memo[s + "," + e] = res;
    return memo[s + "," + e];
  }
  function getTotal(s, e) {
    let total = 0;
    for (let i = s; i <= e; i++) {
      total += nums[i];
    }
    return total;
  }
  return split(0, nums.length - 1);
};
console.log(canSplitArray([2, 3, 3, 2, 1], 6));
