var getTargetCopy = function (original, cloned, target) {
  if (!original) return null;
  if (original === target) return cloned;
  return (
    getTargetCopy(original.left, cloned.left, target) ||
    getTargetCopy(original.right, cloned.right, target)
  );
};

var findMode = function (root) {
  let map = {};
  let max = -Infinity;
  function dfs(node) {
    if (!node) return;
    dfs(node.left);
    map[node.val] = (map[node.val] || 0) + 1;
    max = Math.max(map[node.val], max);
    dfs(node.right);
  }
  dfs(root);
  let res = [];
  for (let i of Object.keys(map)) {
    if (map[i] === max) {
      res.push(i);
    }
  }
  return res;
};
var averageOfLevels = function (root) {
  let res = [];
  let queue = [root];
  while (queue.length) {
    let len = queue.length;
    let total = 0;
    for (let i = 0; i < len; i++) {
      node = queue.shift();
      if (!node) continue;
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
      total += node.val;
    }
    res.push(total / len);
  }
  return res;
};
