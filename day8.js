var minSubArrayLen = function (target, nums) {
  let left = 0,
    right = 0;
  let sum = nums[0];
  let res = Infinity;
  while (right < nums.length) {
    sum += nums[right];
  }
  if (res === Infinity) res = 0;
  return res;
};
// this solution need to be optimized

// var minSubArrayLen = function (target, nums) {
//   nums.sort((a, b) => a - b);
//   let i = nums.length - 1;
//   let sum = 0;
//   while (i >= 0) {
//     sum += nums[i];
//     if (sum >= target) return nums.length - i;
//     i--;
//   }
//   return 0;
// };
// console.log(
//   minSubArrayLen(213, [12, 28, 83, 4, 25, 26, 25, 2, 25, 25, 25, 12])
// );

var maxProfit = function (prices) {
  let left = 0,
    right = 0;
  let max = -Infinity;
  let profit;
  while (right < prices.length - 1) {
    right++;
    if (prices[right] > prices[left]) {
      profit = prices[right] - prices[left];
    } else {
      profit = prices[right] - prices[left];
      left = right;
    }
    max = Math.max(max, profit);
    profit = 0;
  }
  return max;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
