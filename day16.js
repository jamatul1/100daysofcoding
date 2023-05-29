var MinStack = function () {
  this.stack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stack.push({
    val,
    min: this.stack.length === 0 ? val : Math.min(val, this.getMin()),
  });
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1].val;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.stack[this.stack.length - 1].min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

var pivotIndex = function (nums) {
  let total = 0;
  for (let i of nums) {
    total += i;
  }
  let left = 0;
  right = total;
  for (let i = 0; i < nums.length; i++) {
    right = total - (left + nums[i]);
    if (right === left) return i;
    left += nums[i];
  }
  return -1;
};

var containsNearbyDuplicate = function (nums, k) {
  let freq = {};
  for (let i = 0; i < k; i++) {
    if (i >= nums.length) break;
    if (freq[nums[i]]) return true;
    freq[nums[i]] = (freq[nums[i]] || 0) + 1;
  }
  let l = 0,
    r = k;
  while (r < nums.length) {
    if (freq[nums[r]]) {
      return true;
    }
    freq[nums[r]] = (freq[nums[r]] || 0) + 1;
    freq[nums[l]] -= 1;
    r++, l++;
  }
  return false;
};

var evalRPN = function (tokens) {
  let stack = [];
  for (let i of tokens) {
    if (i === "+") {
      let val = stack.pop() + stack.pop();
      stack.push(val);
    } else if (i === "-") {
      let val = stack.pop() - stack.pop();
      stack.push(-val);
    } else if (i === "*") {
      let val = stack.pop() * stack.pop();
      stack.push(val);
    } else if (i === "/") {
      let val1 = stack.pop();
      let val2 = stack.pop();
      let val = val2 / val1;
      val = Math.trunc(val);
      stack.push(val);
    } else {
      stack.push(+i);
    }
  }
  return stack.pop();
};

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const add = (a, b) => a + b;
  const sub = (a, b) => b - a;
  const mul = (a, b) => a * b;
  const div = (a, b) => {
    const d = b / a;
    if (d < 0) {
      return Math.ceil(d);
    }
    return Math.floor(d);
  };
  const opsMap = {
    "+": add,
    "-": sub,
    "*": mul,
    "/": div,
  };
  const popArg = () => {
    const arg = tokens.pop();
    if (opsMap[arg]) {
      return opsMap[arg](popArg(), popArg());
    }
    return parseInt(arg);
  };
  return popArg();
};

var asteroidCollision = function (asteroids) {
  let stack = [asteroids[0]];
  for (let i = 1; i < asteroids.length; i++) {
    // is negative then search for previous positive and destroy them or you
    if (asteroids[i] < 0) {
      let survived = asteroids[i];
      while (stack[stack.length - 1] >= 0 && stack.length) {
        let op = stack.pop();
        if (op > Math.abs(asteroids[i])) {
          survived = op;
          break;
        } else if (op === Math.abs(asteroids[i])) {
          survived = null;
          break;
        }
      }
      if (survived) {
        stack.push(survived);
      }
    } else {
      stack.push(asteroids[i]);
    }
  }
  return stack;
};

// cleaner version
var asteroidCollision = function (a) {
  let i = 0,
    stack = [];
  while (i < a.length) {
    if (a[i] >= 0 || !stack.length || stack[stack.length - 1] < 0) {
      stack.push(a[i++]);
    } else if (a[i] + stack[stack.length - 1] < 0) {
      stack.pop();
    } else if (a[i] + stack[stack.length - 1] === 0) {
      stack.pop();
      i++;
    } else {
      i++;
    }
  }

  return stack;
};

var dailyTemperatures = function (temperatures) {
  let answers = [];
  let stack = [];
  for (let i = 0; i < temperatures.length; i++) {
    let t = temperatures[i];
    if (t < temperatures[i + 1]) {
      answers[i] = 1;
      while (
        stack.length &&
        stack[stack.length - 1].val < temperatures[i + 1]
      ) {
        let item = stack.pop();
        answers[item.idx] = i + 1 - item.idx;
      }
    } else {
      stack.push({ val: t, idx: i });
    }
  }
  while (stack.length) {
    let item = stack.pop();
    answers[item.idx] = 0;
  }
  return answers;
};

// It performs better than mine
var dailyTemperatures = function (temperatures) {
  const res = Array(temperatures.length).fill(0);
  let hottest = -Infinity;

  for (let currDay = temperatures.length - 1; currDay >= 0; currDay--) {
    const currTemp = temperatures[currDay];
    if (currTemp >= hottest) {
      hottest = currTemp;
      continue;
    }
    let days = 1;
    while (currTemp >= temperatures[currDay + days]) {
      days += res[currDay + days];
    }
    res[currDay] = days;
  }
  return res;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
