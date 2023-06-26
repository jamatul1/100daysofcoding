var widthOfBinaryTree = (root) => {
  // for holding left node number
  let l = [],
    // for holding the width of the level
    r = [],
    queue = [[root, 0, 0]];
  while (queue.length) {
    let [node, level, i] = queue.shift();
    if (!node) continue;
    // calculating left item number and level width for each item
    (l[level] = l[level] || i), (r[level] = i - l[level]);
    queue.push(
      [node.left, level + 1, i * 2 - 1],
      [node.right, level + 1, i * 2]
    );
  }
  return Math.max(...r) + 1;
};

// REcursive
var widthOfBinaryTree = (root) => {
  let l = [],
    r = [];
  function dfs(node, level, i) {
    (l[level] = l[level] || i), (r[level] = i - l[level]);
    node.left && dfs(node.left, level + 1, i * 2 - 1);
    node.right && dfs(node.right, level + 1, i * 2);
  }
  dfs(root, 0, 0);
  return Math.max(...r) + 1;
};

// Iterative
var goodNodes = function (root) {
  let count = 0;
  function dfs(node, max) {
    if (!node) return;
    if (max <= node.val) count++;
    max = Math.max(max, node.val);
    dfs(node.left, max);
    dfs(node.right, max);
  }
  dfs(root, root.val);
  return count;
};

// Recursive
var kthSmallest = function (root, k) {
  let res = [];
  function dfs(node) {
    if (!node) return;
    dfs(node.left);
    res.push(node.val);
    dfs(node.right);
  }
  dfs(root);
  return res[k - 1];
};

// Iterative
var kthSmallest = function (root, k) {
  let stack = [];
  let cur = root;
  while (cur || stack.length) {
    while (cur) {
      stack.push(cur);
      cur = cur.left;
      console.log(cur);
    }
    cur = stack.pop();
    k--;
    if (k === 0) return cur.val;
    cur = cur.right;
  }
};
var countBeautifulPairs = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (findGCD(Number(String(nums[i])[0], nums[j] % 10 === 1))) count++;
    }
  }
  return count;
};

function findGCD(x, y) {
  if (y === 0) return x;
  return findGCD(y, x % y);
}
