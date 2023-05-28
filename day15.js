var calPoints = function (operations) {
  let stack = [];
  for (let i of operations) {
    if (i === "C") {
      stack.pop();
    } else if (i === "D") {
      let val = stack[stack.length - 1];
      stack.push(val * 2);
    } else if (i === "+") {
      let l = stack.length;
      stack.push(stack[l - 1] + stack[l - 2]);
    } else {
      stack.push(Number(i));
    }
  }
  let total = 0;
  for (let i of stack) {
    total += i;
  }
  return total;
};

var MyStack = function () {
  this.queue = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.queue.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  let len = this.queue.length - 1;
  for (let i = 0; i < len; i++) {
    let val = this.queue.shift();
    this.queue.push(val);
  }
  return this.queue.shift();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  return this.queue[this.queue.length - 1];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.queue.length === 0;
};

var canPlaceFlowers = function (flowerbed, n) {
  let wait = false;
  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 1) wait = true;
    if (flowerbed[i] === 0) {
      if (wait) wait = false;
      else {
        if (
          (i + 1 < flowerbed.length && flowerbed[i + 1] !== 1) ||
          i === flowerbed.length - 1
        )
          n--, (wait = true);
      }
    }
  }
  return n <= 0;
};
