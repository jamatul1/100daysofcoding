var removeKdigits = function (num, k) {
  let stack = [];
  for (let i = 0; i < num.length; i++) {
    // is current digit in right position
    if (num[i] <= num[i + 1] || i === num.length - 1) {
      let j = stack.length - 1;
      // find the right position by removing from the stack
      while (k > 0 && stack.length && num[i] < stack[j]) {
        stack.pop();
        j--;
        k--;
      }
      stack.push(num[i]);
    } else {
      if (k > 0) {
        k--;
      } else stack.push(num[i]);
    }
  }
  while (k > 0) {
    stack.pop();
    k--;
  }
  let res = "";
  for (let i = 0; i < stack.length; i++) {
    if (i === 0 && stack[i] === "0") {
      while (stack[i] === "0") i++;
    }
    res += i < stack.length ? stack[i] : "0";
  }

  return res === "" ? "0" : res;
};
// // This solution is not implemented properly
// console.log(removeKdigits("1232", 2));

var removeKdigits = function (num, k) {
  let stack = [];
  for (let n of num) {
    while (stack.length && n < stack[stack.length - 1] && k > 0) {
      stack.pop();
      k--;
    }
    stack.push(n);
  }
  while (k > 0) {
    stack.pop();
    k--;
  }
  while (stack.length && stack[0] === "0") {
    stack.shift();
  }
  return stack.length ? stack.join("") : "0";
};

var find132pattern = function (nums) {
  let stack = [];
  let min = nums[0];
  for (let j = 1; j < nums.length; j++) {
    let i = nums[j];
    while (stack.length && stack[stack.length - 1][0] <= i) {
      stack.pop();
    }
    if (stack.length && stack[stack.length - 1][1] < i) return true;
    stack.push([i, min]);
    min = Math.min(min, i);
  }
  return false;
};
console.log(find132pattern([3, 5, 0, 3, 4]));
