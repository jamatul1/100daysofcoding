var mergeTrees = function (root1, root2) {
  if (!root1 && !root2) return null;
  let val1 = root1 ? root1.val : 0;
  let val2 = root2 ? root2.val : 0;
  let root = new TreeNode(val1 + val2);
  root.left = mergeTrees(root1 ? root1.left : null, root2 ? root2.left : null);
  root.right = mergeTrees(
    root1 ? root1.right : null,
    root2 ? root2.right : null
  );
  return root;
};
