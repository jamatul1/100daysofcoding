var preorderTraversal = function (root) {
  let values = [];
  let node = root;
  let stack = [node];
  while (stack.length || node) {
    if (node) {
      values.push(node.val);
      stack.push(node.left);
      node = node.left;
    } else {
      let poppedNode = stack.pop();
      poppedNode && stack.push(poppedNode.right);
      node = poppedNode && poppedNode.right;
    }
  }
  return values;
};
// An better solution - store less values then the previous one
var preorderTraversal = function (root) {
  const res = [];
  const stack = [];
  let curNode = root;

  while (curNode || stack.length) {
    if (curNode) {
      stack.push(curNode.right);
      res.push(curNode.val);
      curNode = curNode.left;
    } else {
      curNode = stack.pop();
    }
  }
  return res;
};
var postorderTraversal = function (root) {
  let res = [];
  let curr = root;
  let stack = [];
  while (stack.length || curr) {
    // if current exist
    if (curr) {
      stack.push(curr);
      curr = curr.left;
    } else {
      // get the right neighbour / adjacent node
      let rightNode = stack[stack.length - 1].right;
      // if rightNode empty
      if (!rightNode) {
        let parentNode = stack.pop();
        res.push(parentNode.val);
        // check whether it is the right child of other parents
        while (stack.length && stack[stack.length - 1].right === parentNode) {
          parentNode = stack.pop();
          res.push(parentNode.val);
        }
      } else {
        // handle rightNode
        curr = rightNode;
      }
    }
  }
  return res;
};
