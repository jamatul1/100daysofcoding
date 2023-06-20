var tree2str = function (root) {
  let res = root.val + "";
  function dfs(node, parent) {
    if (!node && parent.right) {
      res += "()";
      return;
    } else if (!node) return;
    if (node !== root) res += "(" + node.val;
    node && dfs(node.left, node);
    node && dfs(node.right, node);
    if (node !== root) res += ")";
  }
  dfs(root);
  return res;
};

var isSubtree = function (root, subRoot) {
  if (subRoot === null) return true;
  if (root === null) return false;
  if (isSameTree(root, subRoot)) {
    return true;
  }
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};
var isSameTree = function (r1, r2) {
  if (r1 === null && r2 === null) return true;
  if (r1 !== null && r2 !== null && r1.val === r2.val) {
    return isSameTree(r1.left, r2.left) && isSameTree(r1.right, r2.right);
  }
  return false;
};
