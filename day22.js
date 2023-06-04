function Node(val, next) {
  this.val = val ? val : 0;
  this.next = next ? next : undefined;
}

var MyLinkedList = function () {
  this.len = 0;
  this.head = null;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (index >= this.len || this.len <= 0 || index < 0) return -1;
  let cur = this.head;
  while (index > 0) {
    cur = cur.next;
    index--;
  }
  return cur.val;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  let newNode = new Node(val, this.head);
  this.head = newNode;
  this.len++;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  if (!this.head) {
    this.head = new Node(val, null);
    this.len++;
    return;
  }
  let cur = this.head;
  let tail;
  while (cur) {
    tail = cur;
    cur = cur.next;
  }
  tail.next = new Node(val, null);
  this.len++;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index < 0 || index > this.len) return;
  if (index === 0) {
    this.addAtHead(val);
    return;
  }
  if (index === this.len) {
    this.addAtTail(val);
    return;
  }
  let prev;
  let cur = this.head;
  while (index > 0) {
    prev = cur;
    cur = cur.next;
    index--;
  }
  let newNode = new Node(val, cur);
  prev.next = newNode;
  this.len++;
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this.len) return;
  if (index === 0) {
    let prevHead = this.head;
    this.head = this.head.next;
    prevHead.next = null;
    this.len--;
    return;
  }
  let prev;
  let cur = this.head;
  while (index > 0) {
    prev = cur;
    cur = cur.next;
    index--;
  }
  prev.next = cur.next;
  cur.next = null;
  this.len--;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

/**
 * @param {string} homepage
 */

function Node(val, next, prev) {
  this.val = val;
  this.next = next;
  this.prev = prev;
}
var BrowserHistory = function (homepage) {
  this.head = new Node(homepage, null, null);
  this.current = this.head;
};

/**
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function (url) {
  let newNode = new Node(url, null, this.current);
  this.current.next = newNode;
  this.current = newNode;
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function (steps) {
  while (steps > 0 && this.current.prev) {
    this.current = this.current.prev;
    steps--;
  }
  return this.current.val;
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function (steps) {
  while (steps > 0 && this.current.next) {
    this.current = this.current.next;
    steps--;
  }
  return this.current.val;
};

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
