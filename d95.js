/**-----------560. Subarray Sum Equals K----------- */
var subarraySum = function (nums, k) {
  let prefixMap = {};
  prefixMap[0] = 1;
  let i = 0,
    sum = 0,
    count = 0;
  while (i < nums.length) {
    sum += nums[i];
    if (prefixMap[sum - k]) count += prefixMap[sum - k];
    prefixMap[sum] = (prefixMap[sum] || 0) + 1;
    i++;
  }
  return count;
};

/**----------535. Encode and Decode TinyURL----------- */
/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
class TinyUrl {
  constructor() {
    this.encodeMap = {};
    this.decodeMap = {};
    this.baseUrl = "https://tinyurl/";
  }
  encode(url) {
    if (!this.encodeMap[url]) {
      let encoded = this.baseUrl + 1 + Object.keys(this.encodeMap).length;
      this.encodeMap[url] = encoded;
      this.decodeMap[encoded] = url;
    }
    return this.encodeMap[url];
  }
  decode(url) {
    return this.decodeMap[url];
  }
}
let tinyUrl = new TinyUrl();
var encode = function (longUrl) {
  return tinyUrl.encode(longUrl);
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function (shortUrl) {
  return tinyUrl.decode(shortUrl);
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */

/**--------554. Brick Wall--------- */
var leastBricks = function (wall) {
  let total = wall[0].reduce((total, cur) => total + cur, 0);
  let map = new Map();
  for (let i = 0; i < wall.length; i++) {
    let endPoint = 0;
    for (let j = 0; j < wall[i].length; j++) {
      endPoint += wall[i][j];
      if (endPoint > 0 && endPoint < total)
        if (map.has(endPoint)) map.set(endPoint, map.get(endPoint) + 1);
        else map.set(endPoint, 1);
    }
  }
  let min = wall.length;
  for (let [point, match] of map.entries()) {
    min = Math.min(min, wall.length - match);
  }
  return min;
};

// slight optimized
var leastBricks = function (wall) {
  let n = wall.length;
  let edges = {};

  let maxEdgeCount = 0;
  for (let bricks of wall) {
    let curEdge = 0;
    for (let i = 0; i < bricks.length - 1; i++) {
      let brick = bricks[i];
      curEdge += brick;
      edges[curEdge] = edges[curEdge] + 1 || 1;
      maxEdgeCount = Math.max(maxEdgeCount, edges[curEdge]);
    }
  }

  return n - maxEdgeCount;
};
/**--------128. Longest Consecutive Sequence-------- */
var longestConsecutive = function (nums) {
  let countMap = new Map();
  let doneMap = new Map();
  for (let i of nums) {
    countMap.set(i, true);
  }
  let count = 0,
    longest = 0;
  for (let i of nums) {
    // find the consecutive
    count = 1;
    let j = i - 1;
    while (!doneMap.has(j) && countMap(j)) {
      doneMap.set(j, true);
      count++;
      j--;
    }
    j = i + 1;
    while (!doneMap.has(j) && countMap(j)) {
      doneMap.set(j, true);
      count++;
      j++;
    }
    longest = Math.max(longest, count);
  }
  return longest;
};
// more optimized
var longestConsecutive = function (nums) {
  let count = 1;
  let maxCount = 0;
  const numsSet = new Set(nums);
  for (let num of numsSet) {
    if (!numsSet.has(num - 1)) {
      // initial head
      while (numsSet.has(num + 1)) {
        num++;
        count++;
      }
      maxCount = Math.max(count, maxCount);
      count = 1;
    }
  }

  return maxCount;
};

/**----1930. Unique Length-3 Palindromic Subsequences------- */
var countPalindromicSubsequence = function (s) {
  let count = 0,
    map = {},
    found = {};
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (map[char]) map[char][1] = i;
    else map[char] = [i, i];
  }
  for (let key of Object.keys(map)) {
    let [start, end] = map[key];
    count += findUnique(s.slice(start + 1, end));
  }
  return count;
};
function findUnique(str) {
  str = str.split("");
  str = new Set(str);
  return str.size;
}

/**----------1963. Minimum Number of Swaps to Make the String Balanced------ */
var minSwaps = function (s) {
  let maxCount = -Infinity,
    leftCount = 0;
  for (let i of s) {
    if (i === "]") leftCount++;
    else if (i === "[") leftCount--;
    maxCount = Math.max(maxCount, leftCount);
  }
  return Math.floor((maxCount + 1) / 2);
};
