/*** --------- 494. Target Sum ---------------- */
var findTargetSumWays = function (nums, target) {
  let total = nums.reduce((a, c) => a + c, 0);
  if ((total - target) % 2 === 1 || target > total) return 0;
  let sum = (total + target) / 2;
  let dp = Array(nums.length + 1)
    .fill()
    .map(() => Array(sum + 1).fill(0));
  dp[0][0] = 1;
  for (let i = 1; i <= nums.length; i++) {
    for (j = 0; j <= sum; j++) {
      if (nums[i - 1] <= j) {
        dp[i][j] = dp[i - 1][j] + dp[i - 1][j - nums[i - 1]];
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }
  console.log(dp);
  return dp[nums.length][sum];
};
console.log(findTargetSumWays([0, 0, 0, 0, 0, 0, 0, 0, 1], 1));
