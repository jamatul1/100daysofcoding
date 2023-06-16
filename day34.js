var diameterOfBinaryTree = function (root) {
  let res = [0];
  function dfs(root) {
    if (!root) return -1;
    let left = dfs(root.left);
    let right = dfs(root.right);
    res[0] = Math.max(res[0], left + right + 2);
    return 1 + Math.max(left, right);
  }
  dfs(root);
  return res[0];
};
var inorderTraversal = function (root) {
  let ans = [];
  function inOrder(node) {
    if (node === null) return;
    inOrder(node.left);
    ans.push(node.val);
    inOrder(node.right);
  }
  inOrder(root);
  return ans;
};
