var maxSlidingWindow = function (nums, k) {
  let maxVal = nums[0],
    maxIdx = 0;
  for (let i = 0; i < k; i++) {
    if (maxVal < nums[i]) (maxVal = nums[i]), (maxIdx = i);
  }
  let maxs = [];
  maxs.push(maxVal);
  let left = 1,
    right = k;
  while (right < nums.length) {
    if (nums[right] >= maxVal) (maxVal = nums[right]), (maxIdx = right);
    // if max is not valid
    let inValid = false;
    if (maxIdx < left) inValid = true;
    if (inValid) {
      let max = nums[left];
      let maxIdx = left;
      let i = left;
      while (i <= right) {
        if (nums[i] >= max) {
          (maxVal = nums[i]), (maxIdx = i);
          max = nums[i];
        }
        i++;
      }
    }
    maxs.push(maxVal);
    right++, left++;
  }
  return maxs;
};

// If we use maxHeap or priorityQueue the solution will be much better than that
// Here we are finding the max in a inefficient manner
// console.log(maxSlidingWindow([9, 10, 9, -7, -4, -8, 2, -6], 5));

// Prev Solution
var minWindow = function (s, t) {
  if (t === "") return "";
  let window = {},
    count = {};
  for (let i of t) {
    if (i in count) count[i] = count[i] + 1;
    else count[i] = 1;
  }
  let have = 0,
    need = Object.keys(count).length;
  let l = 0;
  let r = 0;
  let res = [-1, -1],
    resLen = Infinity;
  while (r < s.length) {
    window[s[r]] = window[s[r]] ? window[s[r]] + 1 : 1;
    if (s[r] in count && window[s[r]] === count[s[r]]) {
      have += 1;
    }
    while (have === need) {
      if (r - l + 1 < resLen) {
        resLen = r - l + 1;
        res = [l, r];
      }
      window[s[l]] -= 1;
      if (s[l] in count && window[s[l]] < count[s[l]]) {
        have -= 1;
      }
      l++;
    }
    r++;
  }
  return s.slice(res[0], res[1] + 1);
};

var minWindow = function (s, t) {
  let tMap = {};
  let wMap = {};
  let minimum = "";
  let current = "";
  let matches = 0;
  for (let i = 0; i < t.length; i++) {
    tMap[t[i]] = (tMap[t[i]] || 0) + 1;
  }
  for (let i = 0; i < t.length; i++) {
    if (tMap[s[i]]) wMap[s[i]] = (wMap[s[i]] || 0) + 1;
    current += s[i];
  }
  for (let i of Object.keys(tMap)) {
    if (tMap[i] <= wMap[i]) matches++;
  }
  if (matches === t.length) return current;
  let left = 0,
    right = t.length - 1;
  let dChar = Object.keys(tMap).length;
  while (right < s.length) {
    if (matches === dChar) {
      if (minimum === "") minimum = current;
      while (matches === dChar) {
        if (minimum.length > current.length) minimum = current;
        left++;
        wMap[current[0]] -= 1;
        if (wMap[current[0]] < tMap[current[0]]) matches--;
        current = current.slice(1);
      }
    }
    right++, (current += s[right]);
    // check for new matches
    let char = s[right];
    if (tMap[char]) {
      wMap[char] = (wMap[char] || 0) + 1;
      if (wMap[char] === tMap[char]) matches++;
    }
  }
  return minimum;
};
//   // when removing
//   left++;
//   if (wMap[current[0]]) {
//     wMap[current[0]] -= 1;
//     if (wMap[current[0]] < tMap[current[0]]) matches--;
//   }
//   current = current.slice(1);
// console.log(minWindow("baba", "baba"));
var search = function (nums, target) {
  let s = 0,
    e = nums.length - 1;
  let m;
  while (s <= e) {
    m = s + Math.floor((e - s) / 2);
    if (nums[m] === target) return m;
    else if (nums[m] > target) {
      e = m - 1;
    } else {
      s = m + 1;
    }
  }
  return -1;
};
var guessNumber = function (n) {
  let s = 1,
    e = n;
  while (true) {
    let m = Math.floor((e + s) / 2);
    let dir = guess(m, 243434343);
    if (dir === 0) return m;
    else if (dir === -1) e = m - 1;
    else s = m + 1;
  }
};

function guess(n, pick) {
  if (n === pick) return 0;
  else if (n > pick) return -1;
  else return 1;
}

console.log(guessNumber(921239930));
var arrangeCoins = function (n) {
  let s = 1,
    e = n;
  let m;
  while (s <= e) {
    m = s + Math.floor((e - s) / 2);
    let coins = (m * (m + 1)) / 2;
    if (coins === n) return m;
    else if (coins > n) {
      e = m - 1;
    } else {
      s = m + 1;
    }
  }
  return e;
};
