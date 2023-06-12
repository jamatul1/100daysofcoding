var summaryRanges = function (nums) {
  let ans = [];
  let i = 0;
  while (i < nums.length) {
    let start = nums[i];
    let end;
    while (nums[i] + 1 === nums[i + 1] && i + 1 < nums.length) {
      end = nums[i + 1];
      i++;
    }
    i++;
    let range = end ? start + "->" + end : start + "";
    ans.push(range);
  }
  return ans;
};

var isFascinating = function (n) {
  let map = {};
  let concat = n + "" + 2 * n + "" + 3 * n + "";
  for (let i of concat) {
    if (i == "0") return false;
    map[i] = (map[i] || 0) + 1;
  }
  for (let i = 1; i <= 9; i++) {
    if (map[i] !== 1) return false;
  }
  return true;
};

var longestSemiRepetitiveSubstring = function (s) {
  let dIdx;
  let l = 0;
  r = 0;
  let max = 0;
  while (r < s.length) {
    if (s[r] === s[r - 1] && r > 0) {
      // double double
      if ((dIdx || dIdx === 0) && (s[dIdx] !== s[r] || dIdx + 2 !== r)) {
        // adjust left
        l = dIdx + 1;
        dIdx = r - 1;
      }
      // more than double
      else if ((dIdx || dIdx === 0) && s[dIdx] === s[r] && dIdx + 2 === r) {
        //adjust left
        l = dIdx + 1;
        dIdx = r - 1;
      } else {
        dIdx = r - 1;
      }
    }
    max = Math.max(max, r - l + 1);
    r++;
  }
  return max;
};
