var isPerfectSquare = function (num) {
  let s = 1,
    e = Math.ceil(num / 3);
  let m;
  let sq;
  while (s <= e) {
    m = Math.floor((s + e) / 2);
    sq = m * m;
    if (sq === num) return true;
    else if (sq > num) e = m - 1;
    else s = m + 1;
  }
  return false;
};

var searchMatrix = function (matrix, target) {
  // find the row
  let s = 0,
    e = matrix.length - 1;
  let m;
  let rangeRow;
  while (s <= e) {
    m = Math.floor((s + e) / 2);
    r = inRange(target, matrix[m][0], matrix[m][matrix[m].length - 1]);
    if (r === 0) {
      rangeRow = m;
      break;
    } else if (r === -1) e = m - 1;
    else s = m + 1;
  }
  if (rangeRow !== 0 && !rangeRow) return false;
  // find the val
  (s = 0), (e = matrix[rangeRow].length - 1);
  while (s <= e) {
    m = s + Math.floor((e - s) / 2);
    if (matrix[rangeRow][m] === target) return true;
    else if (matrix[rangeRow][m] > target) {
      e = m - 1;
    } else {
      s = m + 1;
    }
  }
  return false;
};

function inRange(val, left, right) {
  if (val >= left && val <= right) return 0;
  if (val > right) return 1;
  if (val < left) return -1;
}

// More optamized Solution
var searchMatrix = function (matrix, target) {
  // does it fall into the range
  if (
    matrix[0][0] > target ||
    matrix[matrix.length - 1][matrix[matrix.length - 1].length - 1] < target
  )
    return false;
  // find the row
  let s = 0,
    e = matrix.length - 1;
  let m;
  while (s <= e) {
    m = s + Math.floor((e - s) / 2);
    if (matrix[m][0] <= target && matrix[m][matrix[m].length - 1] >= target)
      break;
    else if (matrix[m][0] > target) {
      e = m - 1;
    } else {
      s = m + 1;
    }
  }
  return binarySearch(matrix[m], target);
};

function binarySearch(nums, target) {
  let s = 0,
    e = nums.length - 1;
  let m;
  while (s <= e) {
    m = s + Math.floor((e - s) / 2);
    if (nums[m] === target) return true;
    else if (nums[m] > target) {
      e = m - 1;
    } else {
      s = m + 1;
    }
  }
}
// console.log(
//   searchMatrix(
//     [
//       [1, 3, 5, 7],
//       [10, 11, 16, 20],
//       [23, 30, 34, 60],
//     ],
//     62
//   )
// );

var minEatingSpeed = function (piles, h) {
  let min = Infinity,
    max = -Infinity;
  for (let i of piles) {
    if (i < min) min = i;
    if (i > max) max = i;
  }

  let s = 1,
    e = max;
  let m;
  let rHour = 0;
  while (s <= e) {
    m = s + Math.floor((e - s) / 2);
    // calculate is it possible with m or not
    rHour = getRHour(piles, m);
    if (rHour <= h) {
      e = m - 1;
    } else if (rHour < h) {
      e = m - 1;
    } else {
      s = m + 1;
    }
  }
  // mid will always same with either s or e
  if (m === s) {
    rHour = getRHour(piles, e);
    if (rHour <= h) return e;
  } else if (m === e) {
    rHour = getRHour(piles, s);
    if (rHour <= h) return s;
  }
  rHour = getRHour(piles, m);
  return rHour <= h ? m : m + 1;
};

function getRHour(piles, speed) {
  let rHour = 0;
  for (let i of piles) {
    let res = Math.floor(i / speed);
    let ext = i % speed > 0 ? 1 : 0;
    rHour += res + ext;
  }
  return rHour;
}

// console.log(minEatingSpeed([3, 6, 7, 11], 8));
// console.log(minEatingSpeed([30, 11, 23, 4, 20], 5));
// console.log(minEatingSpeed([30, 11, 23, 4, 20], 6));
// Much faster and optamized solution
var minEatingSpeed = function (piles, h) {
  let s = 1,
    e = Math.max(...piles);
  let m;
  let sm = Infinity;
  while (s <= e) {
    m = s + Math.floor((e - s) / 2);
    // calculate is it possible with m or not
    let rHour = 0;

    for (let i of piles) {
      rHour += Math.ceil(i / m);
    }
    if (rHour > h) {
      s = m + 1;
    } else {
      e = m - 1;
      sm = Math.min(sm, m);
    }
  }
  return sm;
};
// It is faster
var findMin = function (nums) {
  if (nums[0] < nums[nums.length - 1]) return nums[0];
  let s = 0,
    e = nums.length - 1;
  let m;
  while (s < e) {
    m = Math.floor((s + e) / 2);
    if (nums[m] > nums[e]) s = m + 1;
    else e = m;
  }
  return nums[s];
};

var findMin = function (nums) {
  let rotatePos = rotatedPos(nums);
  // there is no rotation
  if (rotatePos <= 0) return nums[0];
  // rotation point is the result
  return nums[rotatePos];
};

function rotatedPos(nums) {
  let s = 0;
  let e = nums.length - 1;
  let m;
  while (s <= e) {
    m = Math.floor((s + e) / 2);
    // this ensures that we are at the point of the rotation
    if (nums[m] < nums[m - 1] && nums[m] < nums[m + 1]) {
      return m;
    }
    // we need to search it at the left side
    else if (nums[m] < nums[e]) {
      e = m - 1;
    }
    // we need to search it at the right side
    else {
      s = m + 1;
    }
  }
  return e;
}

var search = function (nums, target) {
  let s = 0,
    e = nums.length - 1;
  let m;
  while (s <= e) {
    m = Math.floor((s + e) / 2);
    if (nums[m] === target) return m;
    // mid is at left side
    if (nums[m] > nums[e]) {
      if (nums[m] > target) {
        if (target === nums[s]) return s;
        if (target > nums[s]) e = m - 1;
        else {
          if (target === nums[e]) return e;
          s = m + 1;
        }
      } else {
        s = m + 1;
      }
    }
    // mid is at right side
    else {
      if (nums[m] > target) e = m - 1;
      else {
        if (target > nums[e]) {
          e = m - 1;
        } else {
          s = m + 1;
        }
      }
    }
  }
  return -1;
};
console.log(search([8, 9, 11, 2, 3, 4, 7], 12));
