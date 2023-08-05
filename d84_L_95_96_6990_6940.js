/**---------95. Unique Binary Search Trees II--------- */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var generateTrees = function (n) {
  let memo = {};
  function dfs(L, R) {
    if (memo[L + "," + R] !== undefined) return memo[L + "," + R];
    let res = [];
    for (let i = L; i <= R; i++) {
      let leftChilds = null,
        rightChilds = null;
      if (L < i) {
        leftChilds = dfs(L, i - 1);
      }
      if (i < R) {
        rightChilds = dfs(i + 1, R);
      }
      if (leftChilds) {
        if (rightChilds) {
          for (let left of leftChilds) {
            for (let right of rightChilds) {
              res.push(new TreeNode(i, left, right));
            }
          }
        } else {
          for (let left of leftChilds) {
            res.push(new TreeNode(i, left, null));
          }
        }
      } else {
        if (rightChilds) {
          for (let right of rightChilds) {
            res.push(new TreeNode(i, null, right));
          }
        }
      }
    }
    if (res.length === 0) res.push(new TreeNode(L));
    memo[L + "," + R] = res;
    return memo[L + "," + R];
  }
  return dfs(1, n);
};

/** ----------96. Unique Binary Search Trees----------- */
var numTrees = function (n) {
  let memo = {};
  function dfs(L, R) {
    if (memo[L + "," + R] !== undefined) return memo[L + "," + R];
    let count = 0;
    for (let i = L; i <= R; i++) {
      let leftCounts = 0,
        rightCounts = 0;
      if (L < i) {
        leftCounts += dfs(L, i - 1);
      }
      if (i < R) {
        rightCounts += dfs(i + 1, R);
      }
      count +=
        leftCounts !== 0 && rightCounts !== 0
          ? leftCounts * rightCounts
          : leftCounts !== 0
          ? leftCounts
          : rightCounts;
    }
    memo[L + "," + R] = count === 0 ? 1 : count;
    return memo[L + "," + R];
  }
  return dfs(1, n);
};

// Optimized one
var numTrees = function (n) {
  let memo = {};
  function dfs(n) {
    if (n < 2) return 1;
    if (memo[n] !== undefined) return memo[n];
    let count = 0;
    for (let i = 1; i <= n; i++) {
      count += dfs(i - 1) * dfs(n - i);
    }
    memo[n] = count;
    return memo[n];
  }
  return dfs(n);
};

/**-----------6990. Account Balance After Rounded Purchase---------- */
var accountBalanceAfterPurchase = function (purchaseAmount) {
  let least = Math.floor(purchaseAmount / 10);
  let f = least * 10,
    s = (least + 1) * 10;
  let closest;
  if (Math.abs(purchaseAmount - f) < Math.abs(purchaseAmount - s)) closest = f;
  else closest = s;
  return 100 - closest;
};

/**------------6940. Insert Greatest Common Divisors in Linked List----------- */

function gcd(a, b) {
  while (a != b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  return a;
}

var insertGreatestCommonDivisors = function (head) {
  let prev = head,
    cur = head.next;
  while (cur) {
    let node = new Node(gcd(prev.val, cur.val));
    (prev.next = node), (node.next = cur);
    (prev = cur), (cur = cur.next);
  }
  return head;
};
