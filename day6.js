var compress = function (chars) {
  let p1 = 0;
  let p2 = 1;
  let count = 1;
  while (p2 <= chars.length) {
    // is the next element is same
    if (chars[p2] !== chars[p2 - 1]) {
      p1++;
      if (count > 9) {
        let str = String(count);
        for (let i of str.split("")) {
          chars[p1] = i;
          p1++;
          chars[p1] = chars[p2];
        }
      } else if (count > 1) {
        chars[p1] = String(count);
        p1++;
        chars[p1] = chars[p2];
      } else {
        chars[p1] = chars[p2];
      }
      count = 1;
    } else {
      count++;
    }
    p2++;
  }
  return p1;
};

var rotate = function (nums, k) {
  let totalRound = nums.length;
  let s = 0;
  k = k % nums.length;
  if (k === 0) return nums;
  while (Math.floor(totalRound / k) > 0) {
    let left = s,
      right = nums.length - k;
    while (right < nums.length) {
      let temp = nums[left];
      nums[left] = nums[right];
      nums[right] = temp;
      right++;
      left++;
    }
    s += k;
    totalRound -= k;
    while (totalRound < k) {
      k = k - totalRound;
    }
  }
  if (totalRound === 1) return nums;
  // do the rotating again
  return nums;
};

var rotate = function (nums, k) {
  k = k % nums.length;
  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
};

function reverse(nums, start, end) {
  while (start < end) {
    // Swap elements at start and end indices
    let temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
    // Increment start index and decrement end index
    start++;
    end--;
  }
}
