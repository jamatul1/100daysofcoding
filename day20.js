var removeDuplicates = function (s, k) {
  let stack = [];
  let i = 0;
  while (i < s.length) {
    // update stack count
    if (stack.length && stack[stack.length - 1][0] === s[i]) {
      let item = stack.pop();
      stack.push([item[0], ++item[1]]);
    }
    // add a new val into stack
    else {
      stack.push([s[i], 1]);
    }
    // check is the last el in stack is k
    if (stack.length && stack[stack.length - 1][1] === k) {
      stack.pop();
    }
    i++;
  }
  let res = "";
  for (let i of stack) {
    res += i[0].repeat(i[1]);
  }
  return res;
};

// console.log(removeDuplicates("eebeeebbeeb", 2));
var FreqStack = function () {
  this.maxCount = 0;
  this.freqStack = {};
  this.freq = {};
};

/**
 * @param {number} val
 * @return {void}
 */
FreqStack.prototype.push = function (val) {
  // reset the count of the element
  this.freq[val] = (this.freq[val] || 0) + 1;
  let count = this.freq[val];
  // reset the maxCount
  this.maxCount = Math.max(this.maxCount, count);
  // push it into its normal position
  if (this.freqStack[count]) {
    this.freqStack[count].push(val);
  } else {
    this.freqStack[count] = [val];
  }
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function () {
  let returnedVal = this.freqStack[this.maxCount].pop();
  this.freq[returnedVal] -= 1;
  if (this.freqStack[this.maxCount].length === 0) this.maxCount--;
  return returnedVal;
};

var largestRectangleArea = function (heights) {
  let stack = [];
  let max = -Infinity;
  let i = 0;
  while (i < heights.length) {
    let idx = i;
    while (stack.length && stack[stack.length - 1][0] >= heights[i]) {
      let height = stack.pop();
      max = Math.max(max, height[0] * (i - height[1]));
      idx = height[1];
    }
    stack.push([heights[i], idx]);
    i++;
  }
  while (stack.length) {
    let height = stack.pop();
    max = Math.max(max, height[0] * (heights.length - height[1]));
  }
  return max;
};

// console.log(largestRectangleArea([1]));

// previous solution
var findMedianSortedArrays = function (nums1, nums2) {
  // take a and b based on the length of the nums1 and nums2
  let a = nums1;
  let b = nums2;
  let total = nums1.length + nums2.length;
  let half = Math.floor(total / 2);
  if (b.length < a.length) {
    let temp = a;
    a = b;
    b = temp;
  }
  // take two pointer that split the virtual merged array into two equal half
  let l = 0,
    r = a.length - 1;
  while (true) {
    // i is the midd
    let i = Math.floor((l + r) / 2);
    let j = half - i - 2;

    let Aleft = i < 0 ? -Infinity : a[i];
    let Aright = i + 1 > a.length - 1 ? Infinity : a[i + 1];
    let Bleft = j < 0 ? -Infinity : b[j];
    let Bright = j + 1 > b.length - 1 ? Infinity : b[j + 1];

    if ((Aleft <= Bright) & (Bleft <= Aright)) {
      // partition is correct
      if (total % 2) {
        return Math.min(Aright, Bright);
      }
      return (Math.max(Aleft, Bleft) + Math.min(Aright, Bright)) / 2;
    } else if (Aleft > Bright) {
      r = i - 1;
    } else {
      l = i + 1;
    }
  }
};

// current
var findMedianSortedArrays = function (nums1, nums2) {
  let a = nums1,
    b = nums2;
  if (a.length > b.length) {
    let temp = a;
    a = b;
    b = temp;
  }
  let l = 0,
    r = a.length - 1;
  let n = Math.floor((a.length + b.length) / 2);
  while (true) {
    let aMid = Math.floor((l + r) / 2);
    let bMid = n - aMid - 2;

    let leftA = aMid < 0 ? -Infinity : a[aMid];
    let rightA = aMid + 1 >= a.length ? Infinity : a[aMid + 1];
    let leftB = bMid < 0 ? -Infinity : b[bMid];
    let rightB = bMid + 1 >= b.length ? Infinity : b[bMid + 1];

    if (leftA <= rightB && leftB <= rightA) {
      if ((a.length + b.length) % 2 === 0)
        return (Math.min(rightB, rightA) + Math.max(leftA, leftB)) / 2;
      else return Math.min(rightA, rightB);
    } else if (leftA > rightB) {
      r = aMid - 1;
    } else {
      l = aMid + 1;
    }
  }
};
console.log(findMedianSortedArrays([1, 3], [2]));
