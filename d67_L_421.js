/** ------------ 421. Maximum XOR of Two Numbers in an Array----------- */
var findMaximumXOR = function (nums) {
  let n = nums.length;
  let max = 0,
    mask = 0;
  var se = new Set();
  for (let i = 30; i >= 0; i--) {
    mask |= 1 << i;
    for (let j = 0; j < n; ++j) {
      se.add(nums[j] & mask);
    }
    let newmax = max | (1 << i);
    for (let prefix of se.keys()) {
      if (se.has(newmax ^ prefix)) {
        max = newmax;
        break;
      }
    }
    se.clear();
  }
  return max;
};
