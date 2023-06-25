// Question was not clear
// Difficulties: Was unclear what i should return from the recursive function and how going to traverse each subblock
// Intiution: User Recursion to visit all sub blocks until the all the values are same
var construct = function (grid) {
  function dfs(n, r, c) {
    // check is all elements are same
    let allSame = true;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (grid[r][c] !== grid[r + i][c + j]) {
          allSame = false;
        }
      }
    }
    // base case: if all are same
    if (allSame) return new Node(grid[r][c], true, null, null, null, null);
    let node = new Node(1, false, null, null, null, null);
    // if not
    // now recursively find the solution
    n = Math.floor(n / 2);
    node.topLeft = dfs(n, r, c);
    node.topRight = dfs(n, r, c + n);
    node.bottomLeft = dfs(n, r + n, c);
    node.bottomRight = dfs(n, r + n, c + n);
    return node;
  }
  return dfs(grid.length, 0, 0);
};

// serialize the nodes in preorder and use map for lookup
var findDuplicateSubtrees = function (root) {
  let res = [];
  let map = {};
  function dfs(node) {
    if (!node) return "null";
    let serialized = [node.val, dfs(node.left), dfs(node.right)].join(",");
    if (map[serialized] && map[serialized].length === 1) {
      res.push(node);
    }
    if (map[serialized]) map[serialized].push(node);
    else map[serialized] = [node];
    return serialized;
  }
  dfs(root);
  return res;
};

/**
A tree should be between all emplyee based on the relationship
The total time will be sum of the all employee plus their subOrdinates
maximum time
 */
var numOfMinutes = function (n, headID, manager, informTime) {
  let adj = {};
  let timeMap = {};
  adj[-1] = [];
  for (let i = 0; i < n; i++) {
    adj[i] = [];
  }
  // Creating the tree
  for (let i = 0; i < n; i++) {
    let m = manager[i];
    let t = informTime[i];
    adj[m].push(i);
    timeMap[i] = t;
  }
  // Using dfs we are getting the time required for each employee to it's subordinates
  function dfs(node, parent) {
    // for head
    let time = timeMap[node] || 0;
    let mChildTime = 0;
    for (let child of adj[node]) {
      if (child === parent) continue;
      mChildTime = Math.max(mChildTime, dfs(child, node));
    }
    return time + mChildTime;
  }
  return dfs(-1, -1);
};

// If we find the null node and then any valid node that means the tree is not complete
var isCompleteTree = function (root) {
  let queue = [root];
  let nullFound = false;
  while (queue.length) {
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      if (nullFound && node) return false;
      if (!node && !nullFound) nullFound = true;
      node && queue.push(node.left);
      node && queue.push(node.right);
    }
  }
  return true;
};
