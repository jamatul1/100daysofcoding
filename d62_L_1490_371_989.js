/* ------------- 989. Add to Array-Form of Integer ----------------*/
var addToArrayForm = function (num, k) {
  let cNum = 0n;
  let mul = 1n;
  for (let j = num.length - 1; j >= 0; j--) {
    cNum = cNum + mul * BigInt(num[j]);
    mul *= 10n;
  }
  let sum = cNum + BigInt(k);
  let res = [];
  while (sum) {
    res.push(sum % 10n);
    sum = sum / 10n;
  }
  for (let i = 0, j = res.length - 1; i < j; i++, j--) {
    res[i] = res[i] ^ res[j];
    res[j] = res[i] ^ res[j];
    res[i] = res[i] ^ res[j];
  }
  return res;
};

// better version of this problem
var addToArrayForm = function (num, k) {
  for (let i = num.length - 1; i >= 0; i--) {
    k += num[i];
    num[i] = k % 10;
    k = Math.floor(k / 10);
  }

  while (k > 0) {
    num.unshift(k % 10);
    k = Math.floor(k / 10);
  }
  return num;
};

/** --------- 371. Sum of Two Integers --------- */
var getSum = function (a, b) {
  while (b !== 0) {
    let temp = (a & b) << 1;
    a = a ^ b;
    b = temp;
  }
  return a;
};

/* -------------1470. Shuffle the Array---------------*/
var shuffle = function (nums, n) {
  // save them
  for (let i = 0, j = n; j < nums.length; i++, j++) {
    let rightNum = nums[j] << 20;
    nums[i] = nums[i] | rightNum;
  }
  // position them
  let k = n - 1;
  for (let i = nums.length - 1; i >= 0; i -= 2) {
    let right = nums[k] >> 20;
    let left = nums[k] & (Math.pow(2, 20) - 1);
    nums[i] = right;
    nums[i - 1] = left;
    k--;
  }
  return nums;
};
