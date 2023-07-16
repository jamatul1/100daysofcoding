// Leetcode  Weekly Contest 354 --- My solution

// Problem - 1 -2778. Sum of Squares of Special Elements
var sumOfSquares = function (nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums.length % (i + 1) === 0) {
      sum += nums[i] * nums[i];
    }
  }
  return sum;
};

// Problem - 2 2779. Maximum Beauty of an Array After Applying Operation
var maximumBeauty = function (nums, k) {
  nums.sort((a, b) => a - b);
  let max = 0;
  let i = (j = 0);
  while (j < nums.length) {
    if (nums[j] - nums[i] > k * 2) i++;
    max = Math.max(max, j - i + 1);
    j++;
  }
  return max;
};

// Problem - 3 6927. Minimum Index of a Valid Split
var minimumIndex = function (nums) {
  let fromLeft = markMajority(nums);
  let fromRight = markMajority(nums.reverse()).reverse();
  for (let i = 0; i < nums.length - 1; i++) {
    if (fromLeft[i] === fromRight[i + 1]) return i;
  }
  return -1;
};
function markMajority(nums) {
  let map = {};
  let majority = [];
  let count = 0,
    candidate = -1;
  for (var index = 0; index < nums.length; index++) {
    if (count == 0) {
      candidate = nums[index];
      count = 1;
    } else {
      if (nums[index] == candidate) count++;
      else count--;
    }
    map[nums[index]] = (map[nums[index]] || 0) + 1;
    if (map[candidate] > (index + 1) / 2) {
      majority[index] = candidate;
    } else {
      majority[index] = ",";
    }
  }
  return majority;
}
