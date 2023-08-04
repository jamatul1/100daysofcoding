/**--------2765. Longest Alternating Subarray---------- */
var alternatingSubarray = function (nums) {
  let s0 = nums[0],
    s1 = nums[1];
  let i = 1,
    max = -Infinity;
  while (i < nums.length) {
    if (s1 - s0 === 1) {
      let start = i - 1;
      i++;
      let w = s0;
      while (nums[i - 2] === w && nums[i] === w && i < nums.length) {
        w = w === s0 ? s1 : s0;
        i++;
      }
      if (i - start > 1) max = Math.max(max, i - start);
    } else {
      i++;
    }
    (s0 = nums[i - 1]), (s1 = nums[i]);
  }
  return max === -Infinity ? -1 : max;
};

/**-----2766. Relocate Marbles---- */
var relocateMarbles = function (nums, moveFrom, moveTo) {
  let set = new Set(nums);
  for (let i = 0; i < moveFrom.length; i++) {
    set.delete(moveFrom[i]);
    set.add(moveTo[i]);
  }
  return Array.from(set).sort((a, b) => a - b);
};

/** ---------673. Number of Longest Increasing Subsequence------ */
var findNumberOfLIS = function (nums) {
  let memo = {};
  function dfs(idx) {
    if (memo[idx] !== undefined) return memo[idx];
    let count = 0,
      max = -Infinity;
    for (let i = idx + 1; i < nums.length; i++) {
      if (nums[idx] < nums[i]) {
        let from = dfs(i);
        if (max < from.max) {
          max = from.max;
          count = from.count;
        } else if (max === from.max) {
          count += from.count;
        }
      }
    }
    if (max === -Infinity) (max = 0), (count = 1);
    memo[idx] = { count, max: max + 1 };
    return memo[idx];
  }
  let max = -Infinity,
    count = 0;
  for (let i = 0; i < nums.length; i++) {
    let from = dfs(i);
    if (from.max > max) {
      max = from.max;
      count = from.count;
    } else if (from.max === max) count += from.count;
  }
  return count;
};
console.log(findNumberOfLIS([3, 1, 2]));
