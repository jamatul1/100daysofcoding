var maxVowels = function (s, k) {
  let vowels = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true,
  };
  let l = (r = 0);
  let count = 0;
  for (let i = 0; i < k; i++) {
    if (vowels[s[i]]) count++;
    r++;
  }
  r--;
  let max = count;
  while (r < s.length) {
    if (vowels[s[l]]) count--;
    l++;
    r++;
    if (vowels[s[r]]) count++;
    max = Math.max(max, count);
  }
  return max;
};

var singleNonDuplicate = function (nums) {
  let s = 0;
  e = nums.length - 1;
  let m;
  while (s <= e) {
    m = Math.floor((s + e) / 2);
    if (nums[m] !== nums[m - 1] && nums[m] !== nums[m + 1]) return nums[m];
    if (nums[m] === nums[m + 1]) {
      if (m % 2 !== 0) {
        e = m - 1;
      } else {
        s = m + 1;
      }
    } else {
      if (m % 2 === 0) {
        e = m - 1;
      } else {
        s = m + 1;
      }
    }
  }
};

var shipWithinDays = function (weights, days) {
  let total = weights.reduce((acc, cur) => acc + cur, 0);
  let s = 1,
    e = total,
    m;
  while (s <= e) {
    m = Math.floor((s + e) / 2);
    if (isPossible(m)) {
      e = m - 1;
    } else {
      s = m + 1;
    }
  }

  function isPossible(cap) {
    let i = 0;
    let cur;
    let total = 0;
    while (i < weights.length) {
      cur = weights[i];
      while (cur < cap && i < weights.length - 1) {
        if (cur + weights[i + 1] > cap) break;
        i++;
        cur += weights[i];
      }
      total += Math.ceil(cur / cap);
      if (total > days) return false;
      i++;
    }
    return total <= days;
  }
  return s;
};

console.log(shipWithinDays([3, 2, 2, 4, 1], 3));
