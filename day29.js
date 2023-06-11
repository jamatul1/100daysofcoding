var largestNumber = function (nums) {
  nums.sort((a, b) => {
    let sa = a.toString();
    let sb = b.toString();
    return parseInt(sa + sb) > parseInt(sb + sa) ? -1 : 1;
  });
  if (nums[0] === 0) return "0";

  return nums.join("");
};

var findNonMinOrMax = function (nums) {
  if (nums.length <= 2) return -1;
  let minI = 0;
  let maxI = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < nums[minI]) minI = i;
    if (nums[i] > nums[maxI]) maxI = i;
  }
  for (let i = 0; i < nums.length; i++) {
    if (i !== minI && i !== maxI) return nums[i];
  }
};

var smallestString = function (s) {
  // skip initial a
  let i = 0;
  let ans = "";
  while (s[i] === "a" && i < s.length) {
    ans += s[i];
    i++;
  }
  if (i === s.length) {
    return ans.slice(0, ans.length - 1) + "z";
  }
  while (s[i] !== "a" && i < s.length) {
    ans += String.fromCharCode(s[i].charCodeAt(0) - 1);
    i++;
  }
  while (i < s.length) {
    ans += s[i];
    i++;
  }

  return ans;
};
