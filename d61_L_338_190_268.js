/** ---------- 338. Counting Bits----------- */

var countBits = function (n) {
  let res = [];
  for (let i = 0; i <= n; i++) {
    let no = 0;
    let num = i;
    while (num !== 0) {
      num = num & (num - 1);
      no++;
    }
    res.push(no);
  }
  return res;
};

/** ---------- 190. Reverse Bits ----------- */
var reverseBits = function (n) {
  let reverse = 0;
  for (let i = 0; i < 32; i++) {
    let bit = (n >>> i) & 1;
    reverse = reverse | (bit << (31 - i));
  }
  return reverse >>> 0;
};

/**-------------268. Missing Number------------- */
var missingNumber = function (nums) {
  let res = 0;
  for (let i = 1; i <= nums.length; i++) {
    res ^= i;
  }
  for (let i of nums) {
    res ^= i;
  }
  return res;
};
