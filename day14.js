var TimeMap = function () {
  this.map = {};
};

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
  if (this.map[key]) {
    let valObj = this.map[key];
    valObj.vals.push(value);
    valObj.times.push(timestamp);
  } else {
    this.map[key] = {
      vals: [value],
      times: [timestamp],
    };
  }
};

/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {
  // is the key is available
  let mapKey = this.map[key];
  if (!mapKey) return "";
  // find the timestamp
  let times = mapKey.times;
  let s = 0,
    e = times.length - 1,
    m;
  if (times[s] > timestamp) return "";
  let idx;
  while (s <= e) {
    m = Math.floor((s + e) / 2);
    if (times[m] === timestamp) {
      idx = m;
      break;
    } else if (times[m] > timestamp) e = m - 1;
    else s = m + 1;
  }
  if (!idx && idx !== 0) idx = e;
  // return values of that timestamp
  return mapKey.vals[idx];
};

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
var searchRange = function (nums, target) {
  let s = 0,
    e = nums.length - 1,
    m;
  let left;
  while (s <= e) {
    m = Math.floor((s + e) / 2);
    if (nums[m] < target) s = m + 1;
    else {
      e = m - 1;
    }
  }
  if (nums[s] !== target) return [-1, -1];
  left = s;
  e = nums.length - 1;
  while (s <= e) {
    m = Math.floor((s + e) / 2);
    if (nums[m] > target) e = m - 1;
    else {
      s = m + 1;
    }
  }
  return [left, e];
};

// console.log(searchRange([1, 2, 3, 4, 5, 7, 7, 8, 8, 10], 1));
var maximumRemovals = function (s, p, removable) {
  let l = 0,
    r = removable.length - 1;
  while (l <= r) {
    let m = Math.floor((l + r) / 2);
    let deleted = {};
    for (let i = 0; i <= m; i++) {
      deleted[removable[i]] = true;
    }
    let isIt = isSubsequence(s, p, deleted);
    if (isIt) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }
  return l;
};

function isSubsequence(str, subStr, deleted) {
  let l = 0;
  let i = 0;
  while (i < str.length) {
    if (str[i] === subStr[l] && !deleted[i]) {
      l++;
    }
    if (l === subStr.length) return true;
    i++;
  }
  return false;
}

console.log(maximumRemovals("acb", "ab", [2, 0]));
