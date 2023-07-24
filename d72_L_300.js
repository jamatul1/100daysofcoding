/** -----------300. Longest Increasing Subsequence----------- */
var lengthOfLIS = function (nums) {
  // each of the sub array of length of 1
  let tab = new Array(nums.length).fill(1);
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) tab[i] = Math.max(tab[i], tab[j] + 1);
    }
  }
  return Math.max(tab);
};
//  d72_L_300 300. Longest Increasing Subsequence
