/**------------------2656. Maximum Sum With Exactly K Elements----------------- */
var maximizeSum = function (nums, k) {
  let max = -Infinity;
  for (let i of nums) {
    if (i > max) max = i;
  }
  let res = 0;
  for (let i = 0; i < k; i++) {
    (res += max), max++;
  }
  return res;
};

/**-------2657. Find the Prefix Common Array of Two Arrays--- */
var findThePrefixCommonArray = function (A, B) {
  let aMap = {},
    bMap = {};
  let prefix = 0,
    C = [];
  for (let i = 0; i < A.length; i++) {
    let a = A[i],
      b = B[i];
    if (a === b) {
      prefix++;
    } else {
      aMap[b] && prefix++;
      bMap[a] && prefix++;
      (aMap[a] = true), (bMap[b] = true);
    }
    C.push(prefix);
  }
  return C;
};
/**---------------2658. Maximum Number of Fish in a Grid-------------- */
var findMaxFish = function (grid) {
  function dfs(r, c) {
    if (
      r < 0 ||
      r >= grid.length ||
      c < 0 ||
      c >= grid[0].length ||
      grid[r][c] === -1 ||
      grid[r][c] === 0
    )
      return 0;
    let res = grid[r][c];
    grid[r][c] = -1;
    res += dfs(r, c - 1);
    res += dfs(r, c + 1);
    res += dfs(r + 1, c);
    res += dfs(r - 1, c);

    return res;
  }
  let max = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      max = Math.max(max, dfs(i, j));
    }
  }
  return max;
};

/**------62. Unique Paths---- */
var uniquePaths = function (m, n) {
  let memo = {};
  function dfs(m, n) {
    if (memo[m + "-" + n] !== undefined) return memo[m + "-" + n];
    if (m === 1 && n === 1) return 1;
    if (m < 1 || n < 1) return 0;
    return (memo[m + "-" + n] = dfs(m - 1, n) + dfs(m, n - 1));
  }
  return dfs(m, n);
};

/**-------63. Unique Paths II-------- */
var uniquePathsWithObstacles = function (obstacleGrid) {
  let memo = {};
  function dfs(m, n) {
    if (memo[m + "-" + n] !== undefined) return memo[m + "-" + n];
    if (m < 1 || n < 1 || obstacleGrid[m - 1][n - 1] === 1) return 0;
    if (m === 1 && n === 1) return 1;
    return (memo[m + "-" + n] = dfs(m - 1, n) + dfs(m, n - 1));
  }
  return dfs(obstacleGrid.length, obstacleGrid[0].length);
};

/**-----------2653. Sliding Subarray Beauty---------- */
var getSubarrayBeauty = function (nums, k, x) {
  let window = {},
    res = [];
  for (let i = 0; i < k - 1; i++) {
    let num = nums[i];
    window[num] = (window[num] || 0) + 1;
  }
  for (let j = k - 1; j < nums.length; j++) {
    window[nums[j]] = (window[nums[j]] || 0) + 1;
    let found = 0,
      ans = 0;
    for (let n = -50; n < 0; n++) {
      if (window[n] !== undefined && window[n] !== 0) {
        found += window[n];
        if (found >= x) {
          ans = n;
          break;
        }
      }
    }
    res.push(ans);
    window[nums[j - k + 1]]--;
  }
  return res;
};
