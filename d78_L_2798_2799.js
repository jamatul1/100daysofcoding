// Weekly Contest - 356 - Solved 2
//---2798. Number of Employees Who Met the Target----
var numberOfEmployeesWhoMetTarget = function (hours, target) {
  let count = 0;
  for (let i of hours) {
    if (i >= target) count++;
  }
  return count;
};

//----2799. Count Complete Subarrays in an Array---
var countCompleteSubarrays = function (nums) {
  let n = (n = nums.length);
  let dMap = new Map();
  for (let i = 0; i < n; ++i) dMap.set(nums[i], 1);
  let k = dMap.size;
  let map = new Map();
  let ans = 0,
    right = 0,
    window = 0;

  for (let left = 0; left < n; left++) {
    while (right < n && window < k) {
      if (map.has(nums[right])) map.set(nums[right], map.get(nums[right]) + 1);
      else map.set(nums[right], 1);

      if (map.get(nums[right]) == 1) window++;

      right++;
    }
    if (window == k) ans += n - right + 1;
    if (map.has(nums[left])) map.set(nums[left], map.get(nums[left]) - 1);
    if (map.get(nums[left]) == 0) --window;
  }

  return ans;
};
