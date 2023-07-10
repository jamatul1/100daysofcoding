var shipWithinDays = function (weights, days) {
  let total = weights.reduce((acc, cur) => acc + cur, 0);
  let s = 1,
    e = total,
    m;
  // we are trying to find the minimum days which falls inbetween 1 and total of the weights
  while (s <= e) {
    m = Math.floor((s + e) / 2);
    if (isPossible(m)) {
      e = m - 1;
    } else {
      s = m + 1;
    }
  }

  // is possible checks is it possible to shift with current ship capacity or not
  function isPossible(cap) {
    let i = 0;
    // current always hold the number of the weights that can be shift in the ship at the same day
    let cur;
    // total is the number of the days required to shift the weights
    let total = 0;
    while (i < weights.length) {
      // for each day we count the cur
      cur = weights[i];
      // is it possible to take more weight ?
      while (cur < cap && i < weights.length - 1) {
        // if not break
        if (cur + weights[i + 1] > cap) break;
        // we can include that weight
        i++;
        cur += weights[i];
      }
      // if all the weights is larger than the capacity then break
      if (cur > cap) return false;
      total++;
      // if total days is bigger than required days then break
      if (total > days) return false;
      i++;
    }
    return total <= days;
  }
  return s;
};

var validateStackSequences = function (pushed, popped) {
  let stack = [];
  let saw = {};
  let i = (j = 0);
  while (j < popped.length) {
    if (stack[stack.length - 1] === popped[j]) {
      j++;
      stack.pop();
      continue;
    } else if (saw[popped[j]]) return false;
    if (i >= pushed.length) return false;
    stack.push(pushed[i]);
    saw[pushed[i]] = true;
    i++;
  }
  return true;
};

console.log(validateStackSequences([1, 2, 4], [4, 1]));
