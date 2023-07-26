/**-----1721. Swapping Nodes in a Linked List--------- */
var swapNodes = function (head, k) {
  // find the left side node
  let stack = [];
  let cur = head;
  while (cur) {
    stack.push(cur);
    cur = cur.next;
  }
  let len = stack.length;
  let temp = stack[len - k].val;
  stack[len - k].val = stack[k - 1].val;
  stack[k - 1].val = temp;
  return head;
};
// same problem with optaimized memory
var swapNodes = function (head, k) {
  let first = head;
  while (k > 1) {
    first = first.next;
    k--;
  }
  let left = head,
    right = first;
  while (right && right.next) {
    (left = left.next), (right = right.next);
  }
  let temp = left.val;
  left.val = first.val;
  first.val = temp;
  return head;
};

//1721. Swapping Nodes in a Linked List
