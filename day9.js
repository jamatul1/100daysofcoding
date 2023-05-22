// brute force
var characterReplacement = function (s, k) {
  let left = (right = 0);
  let maxCount = 0;
  let iK = k;
  while (right < s.length) {
    // not same
    if (s[left] !== s[right]) {
      // is our k is zero
      if (k === 0) {
        maxCount = Math.max(maxCount, right - left);
        let i = left + 1;
        while (s[i] === s[left]) {
          i++;
        }
        (left = i), (right = i), (k = iK);
      } else {
        k--;
      }
    }
    right++;
  }
  if (k === 0) {
    maxCount = Math.max(maxCount, right - left);
  } else {
    let add = right - left + k;
    add = add > s.length ? s.length : add;
    maxCount = Math.max(maxCount, add);
  }

  return maxCount;
};

// optamized
var characterReplacement = function (s, k) {
  let cMap = {};
  let l = 0,
    r = 0;
  let mCount = 0;
  let lCount = 0;
  while (r < s.length) {
    cMap[s[r]] = (cMap[s[r]] || 0) + 1;
    let curLen = r - l + 1;
    lCount = Math.max(lCount, cMap[s[r]]);
    if (curLen - lCount > k) {
      cMap[s[l]] -= 1;
      l++;
    }
    mCount = Math.max(mCount, r - l + 1);
    r++;
  }
  return mCount;
};

var totalFruit = function (fruits) {
  let fMap = {};
  let max1 = null,
    max1Count = 0;
  let max2 = null,
    max2Count = 0;
  for (let i = 0; i < fruits.length; i++) {
    let f = fruits[i];
    fMap[f] = (fMap[f] || 0) + 1;
    max1Count = Math.max(fMap[f], max1Count);
    if (max1Count === fMap[f] && max1Count !== fMap[max1]) max1 = fruits[i];
    if (max1 !== fruits[i]) {
      max2Count = Math.max(fMap[f], max2Count);
      if (max2Count === fMap[f]) max2 = fruits[i];
    }
  }
  return max1Count + max2Count;
};

var totalFruit = function (fruits) {
  let l = (r = 0);
  let m = 0;
  let basket = [];
  while (r < fruits.length) {
    let f = fruits[r];
    //updating the basket
    if (!basket.includes(f)) {
      basket.push(f);
    }
    // is the basket length is increased
    if (basket.length > 2) {
      // find the fruit that need to be throw
      let delF = basket[0] == fruits[r - 1] ? basket[1] : basket[0];
      // throw the fruit from the basket
      basket = basket.filter((b) => b !== delF);
      // find the throwed fruit idx
      let i = l;
      let idx;
      while (i < r) {
        if (fruits[i] === Number(delF)) idx = i;
        i++;
      }
      // now move forward
      l = idx + 1;
    }
    m = Math.max(m, r + 1 - l);
    r++;
  }

  return m;
};

var checkInclusion = function (s1, s2) {
  let freq = {};
  for (let i of s1) {
    freq[i] = (freq[i] || 0) + 1;
  }
  let l = (r = 0);
  let modified = "";
  while (r < s2.length) {
    // is it there
    if (freq[s2[r]] > 0) {
      modified += s2[r];
      freq[s2[r]] -= 1;
      r++;
    }
    // it shouldnt there or twice
    else if (freq[s2[r]] === 0) {
      freq[s2[l]] += 1;
      modified = modified.slice(1);
      l++;
    }
    // it is not there
    else {
      r++;
      l = r;
      // repairing
      for (let i of modified) {
        freq[i] += 1;
      }
      modified = "";
    }
    if (r - l === s1.length) return true;
  }
  return false;
};

// Another Approches
var checkInclusion = function (s1, s2) {
  let s1Counts = Array(26).fill(0);
  let s2Counts = Array(26).fill(0);
  for (let i = 0; i < s1.length; i++) {
    s1Counts[s1.charCodeAt(i) - 97] += 1;
    s2Counts[s2.charCodeAt(i) - 97] += 1;
  }
  let matches = 0;
  for (let i = 0; i < s1Counts.length; i++) {
    s1Counts[i] === s2Counts[i] && matches++;
  }
  let l = 0;
  for (let r = s1.length; r < s2.length; r++) {
    if (matches === 26) return true;
    let idx = s2.charCodeAt(r) - 97;
    s2Counts[idx] += 1;
    if (s1Counts[idx] === s2Counts[idx]) matches++;
    else if (s1Counts[idx] + 1 === s2Counts[idx]) matches--;

    let idxL = s2.charCodeAt(l) - 97;
    s2Counts[idxL] -= 1;
    if (s1Counts[idxL] === s2Counts[idxL]) matches++;
    else if (s1Counts[idxL] === s2Counts[idxL] + 1) matches--;
    l++;
  }
  return matches === 26;
};

var numOfSubarrays = function (arr, k, threshold) {
  let total = 0;
  let ans = 0;
  let l = 0,
    r = k - 1;
  for (let i = 0; i <= r; i++) {
    total += arr[i];
  }
  while (r < arr.length) {
    if (Math.floor(total / k) >= threshold) {
      ans++;
    }
    total = total - arr[l];
    l++, r++;
    total = total + arr[r];
  }
  return ans;
};

// faster but use the same approaches
var numOfSubarrays = function (arr, k, threshold) {
  let sum = 0,
    count = 0;
  for (let i = 0; i < k; i++) sum += arr[i];
  if (sum / k >= threshold) count++;
  for (let i = k; i < arr.length; i++) {
    sum = sum - arr[i - k] + arr[i];
    if (sum / k >= threshold) count++;
  }
  return count;
};

var maxFrequency = function (nums, k) {
  let mFreq = (count = left = right = totalDiff = 0);
  nums.sort((a, b) => a - b);
  while (right < nums.length) {
    let diff = 0;
    right > 0 && (diff = nums[right] - nums[right - 1]);
    totalDiff += diff * (right - left);
    let i = left;
    while (totalDiff > k) {
      totalDiff -= nums[right] - nums[i];
      i++;
    }
    left = i;
    mFreq = Math.max(mFreq, right - left + 1);
    right++;
  }
  return mFreq;
};

// console.log(maxFrequency([1, 1, 1, 4, 11, 13, 14, 15, 16, 17], 5));

// more optamized
var maxFrequency = function (nums, k) {
  let left = (right = sum = mFreq = 0);
  nums.sort((a, b) => a - b);
  while (right < nums.length) {
    sum += nums[right];
    while (nums[right] * (right - left + 1) - sum > k) {
      sum -= nums[left++];
    }
    mFreq = Math.max(mFreq, right - left + 1);
    right++;
  }
  return mFreq;
};
