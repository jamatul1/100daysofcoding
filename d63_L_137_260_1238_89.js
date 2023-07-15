/** --------------89. Gray Code----------------- */
function grayCode(n) {
  let codes = [];
  // the equation a xor (a rightshift 1) generates graycode number for each
  // a values
  for (let i = 0; i < 1 << n; i++) {
    codes.push(i ^ (i >> 1));
  }
  return codes;
}

/** ------1238. Circular Permutation in Binary Representation-------- */
var circularPermutation = function (n, start) {
  let grayCode = [];
  // generate from the start to right graycode
  for (let i = 0; i < 1 << n; i++) {
    grayCode.push(i ^ (i >> 1));
  }
  // find the start position
  let pos;
  for (let i = 0; i < grayCode.length; i++) {
    if (grayCode[i] === start) {
      pos = i;
      break;
    }
  }
  return [...grayCode.slice(pos), ...grayCode.slice(0, pos)];
};

/** ----------260. Single Number III--------- */
var singleNumber = function (nums) {
  let xor = 0;
  for (let i of nums) {
    xor ^= i;
  }

  // find the differing bit
  let i = 0;
  while (i < 64) {
    if (xor & (1 << i)) break;

    i++;
  }
  // now calculate separate xor for each different single
  // number
  let fXor = (sXor = 0);
  for (let j of nums) {
    if (j & (1 << i)) fXor ^= j;
    else sXor ^= j;
  }
  return [fXor, sXor];
};

/** -----------137. Single Number II--------- */
var singleNumber = function (nums) {
  let single = 0;
  for (let i = 0; i < 32; i++) {
    let oneCount = 0;
    for (let num of nums) {
      if (num & (1 << i)) oneCount++;
    }
    if (oneCount % 3 === 1) {
      single = single | (1 << i);
    }
  }
  return single;
};

console.log(singleNumber([2, 2, 2, 5, 9, 5, 5]));
