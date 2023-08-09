/**------2616. Minimize the Maximum Difference of Pairs-------- */
var minimizeMax = function (nums, p) {
  nums.sort((a, b) => a - b);
  function isItForm(mid) {
    let count = 0;
    for (let i = 0; i < nums.length - 1 && count < p; ) {
      if (nums[i + 1] - nums[i] <= mid) {
        count++;
        i += 2;
      } else {
        i++;
      }
    }
    return count >= p;
  }
  let left = 0,
    right = nums[nums.length - 1] - nums[0];
  // using binary search we are finding the minimum max from 0 to highest diff
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (isItForm(mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
};
