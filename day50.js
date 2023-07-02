var permute = function (nums) {
  let res = [];
  let taken = {};
  function permutaion(temp) {
    if (temp.length === nums.length) return res.push([...temp]);
    for (let i = 0; i < nums.length; i++) {
      if (taken[nums[i]]) continue;
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
console.log(permute([1, 2, 3]));
var permuteUnique = function (nums) {
  let res = [];
  let taken = {};
  nums.sort((a, b) => a - b);
  function permutaion(temp) {
    if (temp.length === nums.length) return res.push([...temp]);
    for (let i = 0; i < nums.length; i++) {
      if (taken[i] || (i > 0 && nums[i] === nums[i - 1])) continue;
      temp.push(nums[i]);
      taken[i] = true;
      permutaion(temp);
      temp.pop();
      taken[i] = false;
    }
  }
  permutaion([]);
  return res;
};
var combine = function (n, k) {
  let res = [];
  function dfs(startIdx, temp) {
    if (temp.length === k) res.push([...temp]);
    for (let i = startIdx; i <= n; i++) {
      temp.push(i);
      dfs(i + 1, temp);
      temp.pop();
    }
  }
  dfs(1, []);
  return res;
};
