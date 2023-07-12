/* lEETCODE - 136. Single Number----*/
var singleNumber = function (nums) {
  let res = 0;
  for (let i of nums) {
    res = res ^ i;
  }
  return res;
};

/* LEETCODE - 191. Number of 1 Bits--*/
var hammingWeight = function (n) {
  let res = 0;
  while (n !== 0) {
    if (n & (1 === 1)) {
      res++;
    }
    n = n >>> 1;
  }
  return res;
};
