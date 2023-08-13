//**-------6939. Max Pair Sum in an Array------ */
var maxSum = function (nums) {
  let map = {};
  for (let i of nums) {
    let str = String(i);
    let m = {};
    for (let j of str) {
      m[j] = true;
    }
    let max = 0;
    for (let j = 9; j >= 0; j--) {
      if (m[j]) {
        max = j;
        break;
      }
    }
    if (map[max]) map[max].push(i);
    else map[max] = [i];
  }
  let max = -Infinity;
  for (let key of Object.keys(map)) {
    let p = map[key];
    p.sort((a, b) => b - a);
    console.log(p);
    for (let i = 0; i < p.length - 1; i += 2) {
      max = Math.max(max, p[i] + p[i + 1]);
    }
  }
  return max === 0 ? -1 : max;
};

//**------6914. Double a Number Represented as a Linked List------- */
var doubleIt = function (head) {
  let cur = head,
    number = "";
  while (cur !== null) {
    number += cur.val;
    cur = cur.next;
  }
  let c = 0,
    double = [];
  for (let j = number.length - 1; j >= 0; j--) {
    let digit = Number(number[j]) * 2 + c;
    c = Math.floor(digit / 10);
    double.push(digit % 10);
  }
  if (c == 1) double.push(1);
  double.reverse();
  let newHead = new ListNode(double[0]);
  cur = newHead;
  for (let i = 1; i < double.length; i++) {
    let node = new ListNode(double[i]);
    cur.next = node;
    cur = node;
  }
  return newHead;
};

//**-----------7022. Minimum Absolute Difference Between Elements With Constraint---------- */
var minAbsoluteDifference = function (nums, x) {
  let min = Infinity;
  for (let i = 0; i < nums.length - x; i++) {
    for (let j = i + x; j < nums.length; j++) {
      min = Math.min(min, Math.abs(nums[i] - nums[j]));
    }
  }
  return min;
};

//**----------2369. Check if There is a Valid Partition For The Array--------- */

var validPartition = function (nums) {
  let memo = {};
  function dfs(i) {
    if (i === nums.length) return true;
    if (memo[i] !== undefined) return memo[i];
    let res = false;
    if (i + 1 < nums.length) {
      if (nums[i] === nums[i + 1]) {
        res = res || dfs(i + 2);
      }
    } else {
      return false;
    }
    if (!res && i + 2 < nums.length) {
      if (nums[i] === nums[i + 1] && nums[i + 1] === nums[i + 2]) {
        res = res || dfs(i + 3);
      }
      if (
        !res &&
        nums[i] + 1 === nums[i + 1] &&
        nums[i + 1] === nums[i + 2] - 1
      ) {
        res = res || dfs(i + 3);
      }
    }
    memo[i] = res;
    return memo[i];
  }
  return dfs(0);
};
console.log(validPartition([4, 4, 4, 4, 4]));
