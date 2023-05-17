var topKFrequent = function (nums, k) {
  let map = new Map();
  for (let i of nums) {
    if (map.has(i)) {
      let val = map.get(i);
      val++;
      map.set(i, val);
    } else {
      map.set(i, 1);
    }
  }
  let res = [];
  for (let i of map.keys()) {
    res.push({ val: i, freq: map.get(i) });
  }
  res.sort((a, b) => b.freq - a.freq);
  let finalRes = [];
  for (let i = 0; i < k; i++) {
    finalRes.push(res[i].val);
  }
  return finalRes;
};

// There is a more opitized solution for this problem which require
// Bucket sort

var findSubsequences = function (nums) {
  let res = [],
    map = new Map();
  function find(idx, resItem) {
    for (let i = idx + 1; i < nums.length; i++) {
      if (resItem[resItem.length - 1] <= nums[i]) {
        resItem.push(nums[i]);
        if (!map.has(resItem.join(","))) {
          res.push([...resItem]);
          map.set(resItem.join(","), true);
        }
        find(i, resItem);
        resItem.pop();
      }
    }
  }

  for (let i = 0; i < nums.length; i++) {
    find(i, [nums[i]]);
  }
  return res;
};

console.log(findSubsequences([4, 6, 7, 7]));
