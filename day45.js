// Inorder , postorder
var buildTree = function (inorder, postorder) {
  if (!inorder.length || !postorder.length) return null;
  let root = new TreeNode(postorder[postorder.length - 1]);
  let mid = inorder.indexOf(postorder.pop());
  root.left = buildTree(inorder.slice(0, mid), postorder.slice(0, mid));
  root.right = buildTree(inorder.slice(mid + 1), postorder.slice(mid));
  return root;
};

// inorder, preorder
var buildTree = function (preorder, inorder) {
  if (!preorder.length || !inorder.length) return null;
  let node = new TreeNode(preorder[0]);
  let pos = inorder.indexOf(preorder[0]);
  node.left = buildTree(preorder.slice(1, pos + 1), inorder.slice(0, pos));
  node.right = buildTree(preorder.slice(pos + 1), inorder.slice(pos + 1));
  return node;
};

var zigzagLevelOrder = function (root) {
  let queue = [root];
  let results = [];
  let fromLeft = true;
  while (queue.length) {
    let level = [];
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      if (node) {
        level.push(node.val);
        queue.push(node.left);
        queue.push(node.right);
      }
    }
    if (level.length) {
      // reversing
      if (!fromLeft) {
        for (let j = level.length - 1, i = 0; i < j; i++, j--) {
          let temp = level[i];
          level[i] = level[j];
          level[j] = temp;
        }
      }
      results.push(level);
      fromLeft = !fromLeft;
    }
  }
  return results;
};

// recursive version
var zigzagLevelOrder = function (root) {
  let zigzag = [];
  function dfs(node, i) {
    if (!node) return;
    if (i % 2 !== 0) {
      if (zigzag[i]) {
        zigzag[i].unshift(node.val);
      } else zigzag[i] = [node.val];
    } else {
      if (zigzag[i]) {
        zigzag[i].push(node.val);
      } else zigzag[i] = [node.val];
    }
    dfs(node.left, i + 1);
    dfs(node.right, i + 1);
  }
  dfs(root, 0);
  return zigzag;
};
