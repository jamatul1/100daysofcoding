var minDiffInBST = function (root) {
  let allNodes = [];
  function dfs(node) {
    node && allNodes.push(node.val);
    node && dfs(node.left);
    node && dfs(node.right);
  }
  dfs(root);
  allNodes.sort((a, b) => a - b);
  let min = Infinity;
  for (let i = 1; i < allNodes.length; i++) {
    min = Math.min(min, allNodes[i] - allNodes[i - 1]);
  }
  return min;
};
var minDiffInBST = function (root) {
  let min = Infinity,
    prev = null;
  function dfs(node) {
    if (!node) return;
    dfs(node.left);
    if (prev) {
      min = Math.min(min, node.val - prev.val);
    }
    prev = node;
    dfs(node.right);
  }
  dfs(root);
  return min;
};
