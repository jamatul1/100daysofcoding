var splitString = function (s) {
  function dfs(i, prev, splited) {
    if (i === s.length) {
      if (splited > 1) return true;
      return false;
    }
    for (let j = i; j < s.length; j++) {
      if (isValid(i, j, s, prev)) {
        splited++;
        if (dfs(j + 1, s.slice(i, j + 1), splited)) return true;
        splited--;
        if (i !== 0 && prev !== "0" && s[i] !== "0") return false;
      }
    }
    return false;
  }
  return dfs(0, "", 0);
};

function isValid(i, j, str, prev) {
  let cur = parseInt(str.slice(i, j + 1));
  if (prev === "") return true;
  return parseInt(prev) - cur === 1;
}

var canPartitionKSubsets = function (nums, k) {
  let total = nums.reduce((a, c) => a + c, 0);
  if (total % k !== 0) return false;
  let sum = total / k;
  nums.sort((a, b) => b - a);
  let used = {};
  function bt(idx, remain, total) {
    if (remain === 0) return true;
    if (total === sum) {
      return bt(0, remain - 1, 0);
    }
    for (let i = idx; i < nums.length; i++) {
      if (used[i] || total + nums[i] > sum) continue;
      used[i] = true;
      if (bt(i + 1, remain, total + nums[i])) return true;
      used[i] = false;
    }
    return false;
  }
  return bt(0, k, 0);
};

var maxLength = function (arr) {
  let taken = {};
  let max = -Infinity;
  function bt(idx, concat) {
    if (concat.length > max) max = concat.length;
    for (let i = idx; i < arr.length; i++) {
      let exits = false;
      for (let char of arr[i]) {
        if (taken[char]) {
          exits = true;
          break;
        }
      }
      if (exits) continue;
      if (findDuplicate(arr[i])) continue;
      for (let char of arr[i]) {
        taken[char] = true;
      }
      bt(i + 1, concat + arr[i]);
      for (let char of arr[i]) {
        taken[char] = false;
      }
    }
  }
  bt(0, "");
  return max;
};

function findDuplicate(word) {
  let map = {};
  for (let i of word) {
    if (map[i]) return true;
    map[i] = true;
  }
  return false;
}

var findDifferentBinaryString = function (nums) {
  let already = {};
  for (let i of nums) {
    already[i] = true;
  }
  let res;
  function dfs(temp) {
    if (temp.length === nums.length) {
      let str = temp.join("");
      if (!already[str]) {
        res = str;
        return true;
      }
      return false;
    }
    temp.push("1");
    if (dfs(temp)) return;
    temp.pop();
    temp.push("0");
    dfs(temp);
    temp.pop();
  }
  dfs([]);
  return res;
};
