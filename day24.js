var canMakeArithmeticProgression = function (arr) {
  arr.sort((a, b) => a - b);
  let i = 1;
  while (i < arr.length - 1) {
    let leftDiff = arr[i - 1] - arr[i];
    let rightDiff = arr[i] - arr[i + 1];
    if (leftDiff !== rightDiff) return false;
    i++;
  }
  return true;
};

var productExceptSelf = function (nums) {
  let preCal = [];
  let ans = [];
  let prod = 1;
  for (let i of nums) {
    prod *= i;
    preCal.push(prod);
  }
  let i = nums.length - 1;
  let prodR = 1;
  while (i >= 1) {
    ans[i] = preCal[i - 1] * prodR;
    prodR *= nums[i];
    i--;
  }
  ans[i] = prodR;
  return ans;
};

var productExceptSelf = function (nums) {
  let ans = new Array(nums.length).fill(1);
  let pre = (suf = 1);
  for (let i = 0, j = nums.length - 1; i < nums.length; i++, j--) {
    ans[i] *= pre;
    pre *= nums[i];
    ans[j] *= suf;
    suf *= nums[j];
  }
  return ans;
};

var findAnagrams = function (s, p) {
  let sMap = {};
  let pMap = {};
  let ans = [];
  for (let i = 0; i < p.length; i++) {
    pMap[p[i]] = (pMap[p[i]] || 0) + 1;
    sMap[s[i]] = (sMap[s[i]] || 0) + 1;
  }
  let match = 0;
  for (let i of Object.keys(pMap)) {
    if (pMap[i] === sMap[i]) match++;
  }
  let l = 0,
    r = p.length - 1;
  while (r < s.length) {
    if (match === Object.keys(pMap).length) ans.push(l);
    if (sMap[s[l]] === pMap[s[l]]) match--;
    sMap[s[l]] -= 1;
    if (sMap[s[l]] === pMap[s[l]]) match++;
    l++, r++;
    sMap[s[r]] = (sMap[s[r]] || 0) + 1;
    if (sMap[s[r]] === pMap[s[r]]) match++;
    if (sMap[s[r]] - 1 === pMap[s[r]]) match--;
  }
  return ans;
};

// is not intuative for me
var findAnagrams = function (s, p) {
  const map = new Array(26).fill(0),
    res = [];
  let j = 0;

  for (let char of p) {
    map[char.charCodeAt(0) - 97]++;
  }

  for (let i = 0; i < s.length; i++) {
    const sChar = s.charCodeAt(i) - 97;
    map[sChar]--;

    while (map[sChar] < 0) {
      map[s[j++].charCodeAt(0) - 97]++;
    }

    if (i - j + 1 === p.length) res.push(j);
  }

  return res;
};

console.log(findAnagrams("cbaebabacd", "abc"));

/**
 * @param {number} k
 */

var Node = function (val,next,prev){
  this.val = val
  this.next = next
  this.prev = prev
}


var MyCircularQueue = function(k) {
    this.left = new Node(0,null,null)
    this.right = new Node(0,null,this.left)
    this.left.next = this.right;
    this.space = k;
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if(this.isFull()) return false;
    let newNode = new Node(value,this.right,this.right.prev)
    this.right.prev.next = newNode;
    this.right.prev =newNode
    this.space--
    return true
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if(this.isEmpty()) return false;
    let node = this.left.next;
    this.left.next = node.next;
    node.next.prev = this.left;
    node.next = null, node.prev = null
    this.space++;
    return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    if(this.isEmpty()) return -1;
    return this.left.next.val
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
        if(this.isEmpty()) return -1;
    return this.right.prev.val
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return this.left.next === this.right
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    return this.space === 0
};

/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */