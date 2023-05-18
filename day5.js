// First Approache
var sortColors = function (nums) {
  let red = 0,
    white = 0,
    blue = 0;
  for (let i of nums) {
    if (i === 0) red++;
    else if (i === 1) white++;
    else if (i === 2) blue++;
  }
  let i = 0;
  while (i < red) {
    nums[i] = 0;
    i++;
  }
  let j = 0;
  while (j < white) {
    nums[i] = 1;
    i++;
    j++;
  }
  let k = 0;
  while (k < blue) {
    nums[i] = 2;
    i++;
    k++;
  }
  return nums;
};

// Second Approach
// Dutch National Flag Algorithm
var sortColors = function (nums) {
  let low = 0,
    mid = 0;
  high = nums.length - 1;
  while (mid <= high) {
    if (nums[mid] === 1) mid++;
    else if (nums[mid] === 0) {
      let temp = nums[low];
      nums[low] = nums[mid];
      nums[mid] = temp;
      low++;
      mid++;
    } else if (nums[mid] === 2) {
      let temp = nums[high];
      nums[high] = nums[mid];
      nums[mid] = temp;
      high--;
    }
  }
  return nums;
};

var minimumTotal = function (triangle) {
  let additions = [triangle[0][0]];
  for (let i = 1; i < triangle.length; i++) {
    let newValues = [];
    for (let j = 0; j < triangle[i - 1].length; j++) {
      if (j === 0) {
        newValues.push(additions[j] + triangle[i][j]);
        newValues.push(additions[j] + triangle[i][j + 1]);
      }
      // right cornar
      else if (j === triangle[i - 1].length - 1) {
        newValues.push(additions[j + (j - 1)] + triangle[i][j]);
        newValues.push(additions[j + (j - 1)] + triangle[i][j + 1]);
      }
      // middle
      else {
        newValues.push(additions[j + (j - 1)] + triangle[i][j]);
        newValues.push(additions[j + (j - 1)] + triangle[i][j + 1]);
        newValues.push(additions[j + (j - 1) + 1] + triangle[i][j]);
        newValues.push(additions[j + (j - 1) + 1] + triangle[i][j + 1]);
      }
    }
    additions = newValues;
  }

  let lowest = Infinity;
  for (let i of additions) {
    if (i < lowest) lowest = i;
  }
  return lowest;
};

var isIsomorphic = function (s, t) {
  let map = new Map();
  let alreadyMapped = new Map();
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      if (map.get(s[i]) !== t[i]) return false;
    } else {
      if (alreadyMapped.has(t[i])) return false;
      map.set(s[i], t[i]);
      alreadyMapped.set(t[i], true);
    }
  }
  return true;
};
console.log(isIsomorphic("badc", "baba"));
