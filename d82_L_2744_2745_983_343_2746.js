/**-----2744. Find Maximum Number of String Pairs */
var maximumNumberOfStringPairs = function (words) {
  let counts = 0;
  let map = {};
  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (!map[j] && words[i] === words[j].split("").reverse().join("")) {
        map[j] = true;
        counts++;
        break;
      }
    }
  }
  return counts;
};

/**------2745. Construct the Longest New String---- */
var longestString = function (x, y, z) {
  let min = x,
    max = y;
  if (min > y) (min = y), (max = x);
  if (x == y) return (x + y + z) * 2;
  return (min + min + 1 + z) * 2;
};

/**------983. Minimum Cost For Tickets---- */
var mincostTickets = function (days, costs) {
  let intervals = [1, 7, 30];
  let memo = {};
  function dfs(idx) {
    if (idx >= days.length) return 0;
    if (memo[idx] !== undefined) return memo[idx];
    let cost = Infinity;
    for (let i = 0; i < costs.length; i++) {
      let j = idx;
      while (j < days.length && days[idx] + intervals[i] > days[j]) {
        j++;
      }
      cost = Math.min(cost, costs[i] + dfs(j));
    }
    memo[idx] = cost;
    return cost;
  }
  return dfs(0);
};

/**------343. Integer Break--------- */
var integerBreak = function (n) {
  let memo = {};
  function dfs(num) {
    if (num === 0) return 0;
    if (memo[num] !== undefined) return memo[num];
    let max = -Infinity;
    for (let i = 1; i <= Math.floor(num / 2); i++) {
      let leftPart = dfs(i);
      let rightPart = dfs(num - i);
      max = Math.max(max, leftPart * rightPart);
    }
    if (num === n) return max;
    memo[num] = Math.max(max, num);
    return memo[num];
  }
  return dfs(n);
};

/** --------2746. Decremental String Concatenation------- */

var minimizeConcatenatedLength = function (words) {
  let memo = {};
  function dfs(i, first, last) {
    if (i === words.length) return 0;
    if (memo[i + "_" + first + "_" + last] !== undefined)
      return memo[i + "_" + first + "_" + last];
    let word = words[i];
    let wordLen = word.length;
    min = Infinity;
    if (last === word[0]) {
      min = Math.min(min, dfs(i + 1, first, word[wordLen - 1]) + wordLen - 1);
    } else {
      min = Math.min(min, dfs(i + 1, first, word[wordLen - 1]) + wordLen);
    }
    if (first === words[i][wordLen - 1]) {
      min = Math.min(min, dfs(i + 1, word[0], last) + wordLen - 1);
    } else {
      min = Math.min(min, dfs(i + 1, word[0], last) + wordLen);
    }
    memo[i + "_" + first + "_" + last] = min;
    return memo[i + "_" + first + "_" + last];
  }

  return (
    words[0].length + dfs(1, words[0][0], words[0][words[0].length - 1], 0)
  );
};
