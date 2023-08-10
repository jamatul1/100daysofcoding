/**-------1035. Uncrossed Lines---------- */
var maxUncrossedLines = function (nums1, nums2) {
  let dp = {};
  function dfs(i, j) {
    if (i === nums1.length || j === nums2.length) return 0;
    if (dp[i + "," + j] !== undefined) return dp[i + "," + j];
    if (nums1[i] === nums2[j]) {
      dp[i + "," + j] = 1 + dfs(i + 1, j + 1);
    } else {
      dp[i + "," + j] = Math.max(dfs(i + 1, j), dfs(i, j + 1));
    }
    return dp[i + "," + j];
  }
  return dfs(0, 0);
};
