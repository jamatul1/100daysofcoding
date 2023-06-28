var isPalindrome = function (head) {
  // find the mid
  let slow = (fast = head);
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  // reverse the next half
  let prev = null,
    next;
  while (slow) {
    next = slow.next;
    slow.next = prev;
    prev = slow;
    slow = next;
  }
  // compare them
  let cur = head;
  while (cur && prev) {
    if (cur.val !== prev.val) return false;
    cur = cur.next;
    prev = prev.next;
  }
  return true;
};
var reorderList = function (head) {
  if (!head || !head.next) return head;
  let stack = [];
  let slow = (fast = head);
  while (fast && fast.next) {
    stack.push(slow);
    slow = slow.next;
    fast = fast.next.next;
  }
  // for keep tracking the right side of the node
  let right;
  if (fast) {
    right = slow.next;
  } else {
    right = slow;
  }
  let prev = null;
  let prevRight = right;
  while (stack.length) {
    let leftNode = stack.pop();
    leftNode.next = right;
    let temp = right.next;
    right.next = prev;
    right = temp;
    prev = leftNode;
  }
  if (fast) {
    prevRight.next = slow;
    slow.next = null;
  }
  return head;
};

var reorderList = function (head) {
  let fast = head;
  let slow = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  let prev = null;
  let curr = slow.next;
  slow.next = null;

  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  let l1 = head;
  let l2 = prev;

  while (l1 && l2) {
    let l1next = l1.next;
    let l2next = l2.next;

    l1.next = l2;
    l2.next = l1next;

    l2 = l2next;
    l1 = l1next;
  }

  return l1;
};
