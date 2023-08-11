/*-----------2670. Find the Distinct Difference Array----------*/
var distinctDifferenceArray = function (nums) {
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    res.push(
      countDistinct(nums, 0, i) - countDistinct(nums, i + 1, nums.length - 1)
    );
  }
  return res;
};
function countDistinct(nums, s, e) {
  let map = {};
  for (let i = s; i <= e; i++) {
    map[nums[i]] = (map[nums[i]] || 0) + 1;
  }
  let count = 0;
  for (let key of Object.keys(map)) {
    count++;
  }
  return count;
}

/**_-----2671. Frequency Tracker----------- */
var FrequencyTracker = function () {
  this.countMap = {};
  this.freqMap = {};
};

/**
 * @param {number} number
 * @return {void}
 */
FrequencyTracker.prototype.add = function (number) {
  if (this.freqMap[this.countMap[number]] !== undefined)
    this.freqMap[this.countMap[number]]--;
  this.countMap[number] = (this.countMap[number] || 0) + 1;
  this.freqMap[this.countMap[number]] =
    (this.freqMap[this.countMap[number]] || 0) + 1;
};

/**
 * @param {number} number
 * @return {void}
 */
FrequencyTracker.prototype.deleteOne = function (number) {
  this.countMap[number]--;
  if (this.freqMap[this.countMap[number] + 1] > 0)
    this.freqMap[this.countMap[number] + 1]--;
};

/**
 * @param {number} frequency
 * @return {boolean}
 */
FrequencyTracker.prototype.hasFrequency = function (frequency) {
  if (this.freqMap[frequency] !== undefined && this.freqMap[frequency] !== 0)
    return true;
  return false;
};

/**----------2672. Number of Adjacent Elements With the Same Color----------- */
var colorTheArray = function (n, queries) {
  let color = Array(n).fill(0);
  let ans = 0,
    res = [];
  for (let i = 0; i < queries.length; i++) {
    if (i === 11) console.log(ans, color, queries[i]);
    let idx = queries[i][0],
      col = queries[i][1];

    if (
      color[idx] === color[idx - 1] &&
      color[idx] !== 0 &&
      color[idx - 1] !== 0
    )
      ans--;
    if (
      color[idx] === color[idx + 1] &&
      color[idx] !== 0 &&
      color[idx + 1] !== 0
    )
      ans--;
    color[idx] = col;
    if (
      color[idx] === color[idx - 1] &&
      color[idx] !== 0 &&
      color[idx - 1] !== 0
    )
      ans++;
    if (
      color[idx] === color[idx + 1] &&
      color[idx] !== 0 &&
      color[idx + 1] !== 0
    )
      ans++;
    res.push(ans);
  }
  return res;
};

/**-------------2660. Determine the Winner of a Bowling Game---------------- */
var isWinner = function (player1, player2) {
  let p1 = getScore(player1),
    p2 = getScore(player2);
  if (p1 > p2) return 1;
  else if (p1 < p2) return 2;
  return 0;
};
function getScore(scores) {
  let score = 0;
  for (let i = 0; i < scores.length; i++) {
    if (scores[i - 1] === 10 || scores[i - 2] === 10) score += 2 * scores[i];
    else score += scores[i];
  }
  return score;
}

/**--------------2661. First Completely Painted Row or Column---------------- */
var firstCompleteIndex = function (arr, mat) {
  let n = mat.length,
    m = mat[0].length;
  let map = {};
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      let val = mat[i][j];
      map[val] = [i, j];
    }
  }
  let rows = Array(n).fill(m),
    cols = Array(m).fill(n);
  for (let i = 0; i < arr.length; i++) {
    let [r, c] = map[arr[i]];
    rows[r]--, cols[c]--;
    if (rows[r] === 0 || cols[c] === 0) return i;
  }
  return arr.length;
};

/**---------518. Coin Change II--------- */
var change = function (amount, coins) {
  let memo = {};
  function dfs(target, idx) {
    if (target === 0) return 1;
    if (target < 0 || idx < 0) return 0;
    if (memo[target + "," + idx] !== undefined) return memo[target + "," + idx];
    let res = 0;
    res += dfs(target - coins[idx], idx) + dfs(target, idx - 1);
    memo[target + "," + idx] = res;
    return memo[target + "," + idx];
  }
  return dfs(amount, coins.length - 1);
};

/**--------2466. Count Ways To Build Good Strings-------- */
var countGoodStrings = function (low, high, zero, one) {
  let memo = {};
  let mod = Math.pow(10, 9) + 7;
  function dfs(r) {
    if (r === 0) return 1;
    if (memo[r] !== undefined) return memo[r];
    let res = 0;
    if (r - zero >= 0) res += dfs(r - zero);
    if (r - one >= 0) res += dfs(r - one);
    if (high - low >= r) res++;
    memo[r] = res % mod;
    return memo[r];
  }
  return dfs(high);
};

/**----------2140. Solving Questions With Brainpower---------- */
var mostPoints = function (questions) {
  let memo = {};
  function dfs(i) {
    if (i >= questions.length) return 0;
    if (memo[i] !== undefined) return memo[i];
    let pick = questions[i][0] + dfs(i + questions[i][1] + 1);
    let notPick = dfs(i + 1);
    memo[i] = Math.max(pick, notPick);
    return memo[i];
  }
  return dfs(0);
};
