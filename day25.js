var MyHashMap = function () {
  this.map = {};
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
  this.map[key] = value;
};

/**
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
  return this.map[key] || this.map[key] === 0 ? this.map[key] : -1;
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
  delete this.map[key];
};

var findDifference = function (nums1, nums2) {
  let map1 = {};
  for (let i of nums1) {
    map1[i] = true;
  }
  let map2 = {};
  for (let i of nums2) {
    map2[i] = true;
  }
  let ans1 = [];
  for (let i of Object.keys(map1)) {
    if (!map2[i]) ans1.push(i);
  }
  let ans2 = [];
  for (let i of Object.keys(map2)) {
    if (!map1[i]) ans2.push(i);
  }
  return [ans1, ans2];
};
// It's can be solved more efficiently using set
// But i wanted to use map
