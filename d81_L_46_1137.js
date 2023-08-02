/** --------Daily Leetcode Challenge Day 2 */
/** ------46. Permutations--------- */
var permute = function (nums) {
  let res = [];
  let taken = {};
  function permutaion(temp) {
    if (temp.length === nums.length) return res.push([...temp]);
    for (let i = 0; i < nums.length; i++) {
      if (taken[nums[i]] || (i > 0 && nums[i] === nums[i - 1] && !taken[i - 1]))
        continue;
      temp.push(nums[i]);
      taken[nums[i]] = true;
      permutaion(temp);
      temp.pop();
      taken[nums[i]] = false;
    }
  }
  permutaion([]);
  return res;
};

/**--------1137. N-th Tribonacci Number------- */
var tribonacci = function (n) {
  let t0 = 0,
    t1 = 1,
    t2 = 1;
  let tri = 0;
  if (n == 1 || n == 2) {
    return 1;
  }
  for (let i = 3; i <= n; i++) {
    tri = t0 + t1 + t2;
    t0 = t1;
    t1 = t2;
    t2 = tri;
  }
  return tri;
};
