/**----------2643. Row With Maximum Ones----------- */
var rowAndMaximumOnes = function (mat) {
  let max = -Infinity,
    idx = -1;
  for (let i = 0; i < mat.length; i++) {
    let count = 0;
    for (let j = 0; j < mat[0].length; j++) {
      if (mat[i][j] === 1) count++;
    }
    if (count > max) (max = count), (idx = i);
  }
  return [idx, max];
};
/**----------2645. Minimum Additions to Make Valid String-------- */
var addMinimum = function (word) {
  let req = 0;
  let j = 0;
  while (j < word.length) {
    let need = 3;
    if (word[j] === "a") {
      need--;
      j++;
      if (j < word.length) {
        if (word[j] === "b") {
          need--;
          j++;
          if (j < word.length && word[j] === "c") need--, j++;
        } else if (word[j] === "c") {
          need--;
          j++;
        }
      }
    } else if (word[j] === "b") {
      need--;
      j++;
      if (j < word.length && word[j] === "c") need--, j++;
    } else if (word[j] === "c") need--, j++;
    req += need;
  }
  return req;
};

/**------------918. Maximum Sum Circular Subarray--------- */
var maxSubarraySumCircular = function (nums) {
  let max = nums[0],
    min = nums[0],
    total = nums[0],
    curM = nums[0];
  let curMin = nums[0];
  let i = 1;
  while (i < nums.length) {
    curM = Math.max(curM + nums[i], nums[i]);
    max = Math.max(max, curM);
    curMin = Math.min(curMin + nums[i], nums[i]);
    min = Math.min(min, curMin);
    total += nums[i];
    i++;
  }
  if (max <= 0) return max;
  return Math.max(max, total - min);
};

/**------------55. Jump Game---------- */
var canJump = function (nums) {
  let to = nums.length - 1;
  let i = to - 1;
  while (i >= 0) {
    if (nums[i] + i >= to) {
      to = i;
    }
    i--;
  }
  return to === 0 ? true : false;
};

/**--------45. Jump Game II------ */
var jump = function (nums) {
  let j = nums.length - 1,
    count = 0;
  while (j > 0) {
    let to = j;
    let from = -1;
    let i = to - 1;
    while (i >= 0) {
      if (nums[i] + i >= to) {
        from = i;
      }
      i--;
    }
    count++;
    j = from;
  }
  return count;
};

/**-------978. Longest Turbulent Subarray---------- */
// my version
var maxTurbulenceSize = function (arr) {
  if (arr.length === 1) return arr[0];
  let less = arr[0] < arr[0 + 1];
  let i = 0,
    count = 1,
    max = -Infinity;
  while (i < arr.length - 1) {
    if (checkLess(less, arr, i)) {
      count++, i++, (less = !less);
    } else {
      if (arr[i] === arr[i + 1]) {
        while (i < arr.length + 1 && arr[i] === arr[i + 1]) {
          i++;
        }
        if (arr[i] < arr[i + 1]) less = true;
        else less = false;
        count = 1;
      } else (less = !less), (count = 1);
    }
    max = Math.max(max, count);
  }
  return max;
};
function checkLess(condition, arr, i) {
  if (condition) {
    return arr[i] < arr[i + 1];
  } else {
    return arr[i] > arr[i + 1];
  }
}
// best version creates a alternative wave
var maxTurbulenceSize = function (arr) {
  let res = 1,
    increasing = 1,
    decreasing = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      increasing = decreasing + 1;
      decreasing = 1;
    } else if (arr[i] < arr[i - 1]) {
      decreasing = increasing + 1;
      increasing = 1;
    } else {
      decreasing = 1;
      increasing = 1;
    }
    res = Math.max(res, increasing, decreasing);
  }

  return res;
};
