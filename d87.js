/**-----2769. Find the Maximum Achievable Number----- */

var theMaximumAchievableX = function (num, t) {
  return num + t + t;
};

/**-----2770. Maximum Number of Jumps to Reach the Last Index---- */
var maximumJumps = function (nums, target) {
  let memo = {};
  function dfs(idx) {
    if (idx === nums.length - 1) return 0;
    if (memo[idx] !== undefined) return memo[idx];
    let max = -Infinity;
    for (let i = idx + 1; i < nums.length; i++) {
      if (-target <= nums[i] - nums[idx] && nums[i] - nums[idx] <= target) {
        max = Math.max(max, dfs(i));
      }
    }
    memo[idx] = max + 1;
    return memo[idx];
  }
  let res = dfs(0);
  return res === -Infinity ? -1 : res;
};

/**----------2771. Longest Non-decreasing Subarray From Two Arrays--------- */
var maxNonDecreasingLength = function (nums1, nums2) {
  let memo = {};
  function dfs(idx, from) {
    if (idx === nums1.length) return 0;
    if (memo[idx + "," + from] !== undefined) return memo[idx + "," + from];
    let max = 1;
    let arr = from === 1 ? nums1 : nums2;
    if (nums1[idx + 1] >= arr[idx]) max = Math.max(max, 1 + dfs(idx + 1, 1));
    if (nums2[idx + 1] >= arr[idx]) max = Math.max(max, 1 + dfs(idx + 1, 2));
    memo[idx + "," + from] = max;
    return memo[idx + "," + from];
  }
  let max = 1;
  for (let i = 0; i < nums1.length - 1; i++) {
    max = Math.max(max, dfs(i, 1), dfs(i, 2));
  }
  return max;
};
var maxNonDecreasingLength = function (nums1, nums2) {
  let t1 = 1,
    t2 = 1,
    t11,
    t21,
    t12,
    t22;
  res = 1;
  for (let i = nums1.length - 2; i >= 0; i--) {
    t11 = nums1[i + 1] >= nums1[i] ? t1 + 1 : 1;
    t21 = nums1[i + 1] >= nums2[i] ? t1 + 1 : 1;
    t12 = nums2[i + 1] >= nums1[i] ? t2 + 1 : 1;
    t22 = nums2[i + 1] >= nums2[i] ? t2 + 1 : 1;
    t1 = Math.max(t11, t12);
    t2 = Math.max(t21, t22);
    res = Math.max(res, Math.max(t1, t2));
  }
  return res;
};

/**----1143. Longest Common Subsequence---- */
var longestCommonSubsequence = function (text1, text2) {
  let dp = Array(text1.length + 1)
    .fill()
    .map(() => {
      return Array(text2.length + 1).fill(0);
    });
  for (let i = 1; i <= text1.length; i++) {
    for (let j = 1; j <= text2.length; j++) {
      if (text1[i - 1] === text2[j - 1]) dp[i][j] = 1 + dp[i - 1][j - 1];
      else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }
  return dp[text1.length][text2.length];
};

//------516. Longest Palindromic Subsequence-------
var longestCommonSubsequence = function (text1, text2) {
  let dp = Array(text1.length + 1)
    .fill()
    .map(() => {
      return Array(text2.length + 1).fill(0);
    });
  for (let i = 1; i <= text1.length; i++) {
    for (let j = 1; j <= text2.length; j++) {
      if (text1[i - 1] === text2[j - 1]) dp[i][j] = 1 + dp[i - 1][j - 1];
      else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }
  return dp[text1.length][text2.length];
};

var longestPalindromeSubseq = function (s) {
  return longestCommonSubsequence(s, s.split("").reverse().join(""));
};

/**---------2760. Longest Even Odd Subarray With Threshold---------- */
var longestAlternatingSubarray = function (nums, threshold) {
  let max = 0;
  let i = 0;
  while (i < nums.length) {
    if (nums[i] % 2 === 0 && nums[i] <= threshold) {
      let j = i + 1;
      while (nums[j] <= threshold) {
        if (nums[j - 1] % 2 === nums[j] % 2) {
          break;
        }

        j++;
      }
      max = Math.max(max, j - i);
      i = j;
      continue;
    }
    i++;
  }
  return max;
};

/**-------------2761. Prime Pairs With Target Sum-------------- */
var findPrimePairs = function (n) {
  // Sieve of Eratosthenes algorithm
  let isPrime = Array(n).fill(1);
  isPrime[0] = 0;
  isPrime[1] = 0;
  for (let i = 2; i * i < n; i++) {
    if (!isPrime[i]) continue;
    for (let j = i * i; j < n; j += i) isPrime[j] = 0;
  }
  let res = [];
  for (let i = 1; i <= Math.floor(n / 2); i++) {
    if (isPrime[i]) {
      if (isPrime[n - i]) {
        res.push([i, n - i]);
      }
    }
  }
  return res;
};
