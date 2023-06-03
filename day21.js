var reverseList = function (head) {
  if (!head || !head.next) return head;
  let prev = head;
  let cur = head.next;
  prev.next = null;
  let next = cur.next;
  while (cur !== null) {
    cur.next = prev;
    prev = cur;
    cur = next;
    next = cur && cur.next;
  }
  return prev;
};

// Initial Solution
var removeElements = function (head, val) {
  if (!head) return head;
  while (head && head.val === val) {
    head = head.next;
  }
  if (!head) return head;
  let prev = head;
  let current = head.next;
  while (current) {
    if (current.val === val) {
      prev.next = current.next;
      current.next = null;
      current = prev.next;
    } else {
      prev = current;
      current = current.next;
    }
  }
  return head;
};
// Another Solution
var removeElements = function (head, val) {
  if (!head) return head;
  let dummy = new ListNode();
  dummy.next = head;
  let prev = dummy;
  let current = head;
  while (current) {
    if (current.val === val) {
      prev.next = current.next;
    } else {
      prev = current;
    }
    current = current.next;
  }
  return dummy.next;
};

var getIntersectionNode = function (headA, headB) {
  let lenA = getLength(headA);
  let lenB = getLength(headB);
  let a = lenA >= lenB ? headA : headB;
  let b = lenA < lenB ? headA : headB;
  let aLen = lenA >= lenB ? lenA : lenB;
  let bLen = lenA < lenB ? lenA : lenB;
  while (aLen - bLen !== 0) {
    a = a.next;
    aLen--;
  }
  while (a && b) {
    if (a === b) return a;
    (a = a.next), (b = b.next);
  }
  return null;
};

function getLength(head) {
  let len = 0;
  let current = head;
  while (current) {
    len++;
    current = current.next;
  }
  return len;
}

var pairSum = function (head) {
  let arr = [];
  let cur = head;
  while (cur) {
    arr.push(cur.val);
    cur = cur.next;
  }
  let max = -Infinity;
  for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
    max = Math.max(max, arr[i] + arr[j]);
  }
  return max;
};

// More faster solution
var pairSum = function (head) {
  let stack = [];
  let slow = head,
    fast = head;
  while (fast) {
    stack.push(slow.val);
    slow = slow.next;
    fast = fast.next.next;
  }
  let max = -Infinity;
  while (slow) {
    max = Math.max(max, stack.pop() + slow.val);
    slow = slow.next;
  }
  return max;
};

// Better memory optamized solution
var pairSum = function (head) {
  let slow = head,
    fast = head;
  let prev = null,
    next;
  while (fast) {
    next = slow.next;
    fast = fast.next.next;
    slow.next = prev;
    prev = slow;
    slow = next;
  }
  let max = -Infinity;
  while (slow && prev) {
    max = Math.max(max, prev.val + slow.val);
    slow = slow.next;
    prev = prev.next;
  }
  return max;
};
