var largestAltitude = function (gain) {
  let total = 0;
  let max = 0;
  for (let i of gain) {
    total = total + i;
    max = Math.max(max, total);
  }
  return max;
};
var sumOfLeftLeaves = function (root) {
  let sum = 0;
  function search(node, parent) {
    if (parent && node && !node.left && !node.right && parent.right !== node) {
      sum += node.val;
    }
    node && search(node.left, node);
    node && search(node.right, node);
    return;
  }
  search(root, null);
  return sum;
};
var distanceTraveled = function (mainTank, additionalTank) {
  let distance = 0;
  while (mainTank >= 5 && additionalTank > 0) {
    distance += 5 * 10;
    mainTank = mainTank - 5 + 1;
    additionalTank--;
  }
  distance += mainTank * 10;
  return distance;
};
var findValueOfPartition = function (nums) {
  nums.sort((a, b) => a - b);
  let min = Infinity;
  for (let i = 1; i < nums.length; i++) {
    min = Math.min(nums[i] - nums[i - 1], min);
  }
  return min;
};
