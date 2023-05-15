// Another way is to sort first then see it's frequency

var containsDuplicate = function (nums) {
  let map = new Map();
  for (let i of nums) {
    if (map.has(i)) return true;
    map.set(i, true);
  }
  return false;
};

var majorityElement = function (nums) {
  let map = new Map();
  for (let i of nums) {
    if (map.has(i)) {
      let prev = map.get(i);
      map.set(i, ++prev);
    } else {
      map.set(i, 1);
    }
  }
  for (let i of nums) {
    if (map.get(i) > nums.length / 2) return i;
  }
  // it will never happened
  return false;
};

// *** Moore’s Voting Algorithm -
// If there is a mojority element which is more than the average
// the majority element count will be equal with the minor elements count at some point
var majorityElement2 = function (nums) {
  let map = new Map();
  for (let i of nums) {
    if (map.has(i)) {
      let prev = map.get(i);
      map.set(i, ++prev);
    } else {
      map.set(i, 1);
    }
  }
  let res = [];
  for (let i of map.keys()) {
    if (map.get(i) > Math.floor(nums.length / 3)) res.push(i);
  }
  return res;
};

var majorityElementMoore = function (nums) {
  let el1,
    el2,
    count1 = 0,
    count2 = 0;
  for (let i of nums) {
    if (count1 === 0 && i !== el2) {
      el1 = i;
      count1++;
    } else if (count2 === 0 && i !== el1) {
      el2 = i;
      count2++;
    } else if (el1 === i) count1++;
    else if (el2 === i) count2++;
    else count1--, count2--;
  }
  let res = [];
  let realCount1 = 0,
    realCount2 = 0;
  for (let i of nums) {
    if (i === el1) realCount1++;
    else if (i === el2) realCount2++;
  }
  if (realCount1 > Math.floor(nums.length / 3)) res.push(el1);
  if (realCount2 > Math.floor(nums.length / 3)) res.push(el2);
  return res;
};

majorityElementMoore([1, 1, 1, 7, 8, 9, 6, 5]);
