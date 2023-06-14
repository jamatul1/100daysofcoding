var matrixSumQueries = function (n, queries) {
  let colN = (rowN = n);
  let totalSum = 0;
  let visitedRow = {};
  let visitedCol = {};
  for (let i = queries.length - 1; i >= 0; i--) {
    let [type, pos, val] = queries[i];
    if (type === 0 && !visitedRow[pos] && rowN > 0) {
      totalSum += colN * val;
      visitedRow[pos] = true;
      rowN--;
    } else if (type === 1 && !visitedCol[pos] && colN > 0) {
      totalSum += rowN * val;
      visitedCol[pos] = true;
      colN--;
    }
  }
  return totalSum;
};

var getMinimumDifference = function (root) {
  let nodes = [];
  function traverse(node) {
    node && nodes.push(node);
    node.left && traverse(node.left);
    node.right && traverse(node.right);
  }
  traverse(root);
  let min = Infinity;
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      min = Math.min(min, Math.abs(nodes[i].val - nodes[j].val));
    }
  }
  return min;
};
var semiOrderedPermutation = function (nums) {
  let oneIdx = -1;
  let nIdx = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) oneIdx = i;
    else if (nums[i] === nums.length) nIdx = i;
  }
  let res = nums.length - 1 - nIdx + oneIdx;
  if (oneIdx > nIdx) res--;
  return res;
};

var minimizedStringLength = function (s) {
  let map = {};
  for (let i of s) {
    if (!map[i]) map[i] = true;
  }
  return Object.keys(map).length;
};
