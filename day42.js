var insertIntoBST = function (root, val) {
  if (!root) {
    return new TreeNode(val);
  }
  let cur = root;
  while (cur) {
    if (cur.val > val) {
      if (cur.left) cur = cur.left;
      else {
        cur.left = new TreeNode(val);
        return root;
      }
    } else {
      if (cur.right) cur = cur.right;
      else {
        cur.right = new TreeNode(val);
        return root;
      }
    }
  }
  return root;
};

var deleteNode = function (root, key) {
  /* --*--Intuation and Logic --*--
   There are one case when we are deleting a node from the tree
   1.  There is no parent of the deleted tree that means deleted tree is the root tree
   During deletion
   0. If there is no right tree then the deleted tree will be replaced by it's left sub tree 
   1. If there is right tree of the deleted tree then the deleted tree will replaced by it's right tree
      the left tree of the deleted tree will be added at the end of the left tree of the right tree of the deleted tree
   2. In Case (2) the root will be the newly replaced tree 
  */
  let parent = null;
  let cur = root;
  while (cur) {
    if (cur.val === key) {
      if (parent) {
        // left or right
        // left
        if (parent.val > cur.val) {
          if (cur.right) parent.left = cur.right;
          else if (cur.left) parent.left = cur.left;
          else parent.left = null;
        }
        // right
        else {
          if (cur.right) parent.right = cur.right;
          else if (cur.left) parent.right = cur.left;
          else parent.right = null;
        }
      } else {
        // root changed
        if (cur.right) {
          root = cur.right;
        } else root = cur.left;
      }
      if (cur.right) {
        // find the leftmost node
        let leftMost = cur.right;
        while (leftMost.left) {
          leftMost = leftMost.left;
        }
        leftMost.left = cur.left;
      }
      return root;
    } else {
      // traversing
      parent = cur;
      if (cur.val > key) {
        cur = cur.left;
      } else {
        cur = cur.right;
      }
    }
  }
  return root;
};
var rightSideView = function (root) {
  let res = [];
  let queue = [root];
  while (queue.length) {
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      if (!node) continue;
      if (i === len - 1) res.push(node.val);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }
  return res;
};

// find the lowest common ancestor for binary tree
var lowestCommonAncestor = function (root, p, q) {
  let ans = null;
  let vals = [];
  function find(node) {
    if (!node) return 0;
    res = find(node.left) + find(node.right);
    if (res === 2 && !ans) {
      ans = node;
    }
    if (p.val == node.val || q.val == node.val) {
      if (!ans && res === 1) ans = node;
      return 1 + res;
    }
    return res;
  }
  find(root);
  return ans;
};

// logn version for binary search tree
var lowestCommonAncestor = function (root, p, q) {
  // if the tree get splited that means we are at the lowest
  // common ancestor
  // case : split, non split, non split but node is the parent
  let cur = root;
  while (cur) {
    if (cur.val > p.val && cur.val > q.val) {
      cur = cur.left;
    } else if (cur.val < p.val && cur.val < q.val) {
      cur = cur.right;
    } else {
      return cur;
    }
  }
};

// iterative

// recursive
var isSymmetric = function (root) {
  // a recursive function for left and right tree
  // which checks left's left with right's right
  // and left's right with right's left
  // using bottom up approach
  function helper(leftTree, rightTree) {
    // if both of them are null then true else false evalutes
    if (!leftTree || !rightTree) return leftTree === rightTree;
    return (
      leftTree.val === rightTree.val &&
      helper(leftTree.left, rightTree.right) &&
      helper(leftTree.right, rightTree.left)
    );
  }
  return helper(root.left, root.right);
};

// Iterative
var isSymmetric = function (root) {
  let queue = [root];
  while (queue.length) {
    let level = [];
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      level.push(node);
      node && queue.push(node.left);
      node && queue.push(node.right);
    }
    if (level.length) {
      let left = 0,
        right = level.length - 1;
      while (left <= right) {
        let leftValue = level[left] ? level[left].val : null;
        let rightValue = level[right] ? level[right].val : null;
        if (leftValue !== rightValue) return false;
        left++, right--;
      }
    }
  }
  return true;
};

// It's  a graph problem look like tree
var minTime = function (n, edges, hasApple) {
  let adj = {};
  for (let i = 0; i < n; i++) {
    adj[i] = [];
  }
  for (let [from, to] of edges) {
    adj[from].push(to);
    adj[to].push(from);
  }
  function dfs(edge, parent) {
    let time = 0;
    for (let child of adj[edge]) {
      if (child === parent) continue;
      let childTime = dfs(child, edge);
      if (childTime || hasApple[child]) {
        time += 2 + childTime;
      }
    }
    return time;
  }
  return dfs(0, -1);
};
