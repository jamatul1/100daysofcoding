var isCousins = function (root, x, y) {
  let firstDepth = null;
  let firstParent = null;
  let found = false;
  function dfs(node, d = 0, parent = null) {
    if (!node) return;
    if (firstDepth && firstDepth < d) return;
    if (
      firstDepth === d &&
      (node.val === x || node.val === y) &&
      parent !== firstParent
    ) {
      found = true;
      return;
    }
    if (node.val === x || (node.val === y && !firstDepth)) {
      firstDepth = d;
      firstParent = parent;
    }
    dfs(node.left, d + 1, node);
    dfs(node.right, d + 1, node);
  }
  dfs(root);
  return found;
};

var sumRootToLeaf = function (root) {
  let allSums = [];
  function sumRoot(node, sum = "") {
    if (!node.left && !node.right) {
      allSums.push(sum + "" + node.val);
      return;
    }
    node.left && sumRoot(node.left, sum + "" + node.val);
    node.right && sumRoot(node.right, sum + "" + node.val);
  }
  sumRoot(root);
  let sum = 0;
  for (let i of allSums) {
    sum += parseInt(i, 2);
  }
  return sum;
};
