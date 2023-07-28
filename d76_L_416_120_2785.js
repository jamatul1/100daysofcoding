/** ---------416. Partition Equal Subset Sum------------ */
var canPartition = function (nums) {
  let total = nums.reduce((a, c) => a + c, 0);
  if (total % 2 !== 0) return false;
  let sum = total / 2;
  let dp = Array(nums.length + 1)
    .fill()
    .map(() => Array(sum + 1).fill(0));
  for (let i = 0; i <= nums.length; i++) {
    for (j = 0; j <= sum; j++) {
      if (i === 0 && j > 0) dp[i][j] = false;
      else if (j == 0) dp[i][j] = true;
      else if (nums[i] <= j) {
        dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i]];
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }
  return dp[nums.length][sum];
};

/** 120. Triangle  */
// This solution should work cause we have done some memorization but got time limit at 44 no test case
var minimumTotal = function (triangle) {
  function dp(row, col, memo) {
    let memoKey = row + "-" + col;
    if (memo[memoKey]) return memo[memoKey];
    if (row === triangle.length - 1) {
      return triangle[row][col];
    }
    memo[memoKey] =
      Math.min(dp(row + 1, col, memo), dp(row + 1, col + 1, memo)) +
      triangle[row][col];
    return memo[memoKey];
  }
  return dp(0, 0, {});
};

// A slight modification which get's accepted on Leetcode

var minimumTotal = function (triangle) {
  let memo = {};
  function dp(row, col) {
    if (row === triangle.length - 1) {
      return triangle[row][col];
    }
    if (memo[row + "-" + col] === undefined) {
      memo[row + "-" + col] =
        Math.min(dp(row + 1, col, memo), dp(row + 1, col + 1, memo)) +
        triangle[row][col];
    }
    return memo[row + "-" + col];
  }
  return dp(0, 0);
};

//** 2785. Sort Vowels in a String--- */
var sortVowels = function (s) {
  // find the vowels
  let vowels = [];
  for (let i of s) {
    if (["a", "e", "i", "o", "u"].includes(i.toLowerCase())) {
      vowels.push(i);
    }
  }
  // now sort
  vowels.sort().reverse();
  let res = "";
  for (let i of s) {
    if (["a", "e", "i", "o", "u"].includes(i.toLowerCase())) {
      res += vowels.pop();
    } else res += i;
  }
  return res;
};
