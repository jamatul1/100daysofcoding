var totalFruit = function (fruits) {
  let l = (r = 0);
  let baskets = {};
  let max = 0;
  while (r < fruits.length) {
    if (!baskets[fruits[r]]) {
      baskets[fruits[r]] = fruits[r];
    }
    if (Object.keys(baskets).length > 2) {
      let t = r - 1;
      let fruit = baskets[fruits[t]];
      while (fruits[t] === fruit) {
        t--;
      }
      delete baskets[fruits[t]];
      l = t + 1;
    }
    max = Math.max(max, r - l + 1);
    r++;
  }

  return max;
};

var successfulPairs = function (spells, potions, success) {
  let res = [];
  potions.sort((a, b) => a - b);
  for (let i of spells) {
    res.push(getPairs(potions, i, success));
  }
  return res;
};
function getPairs(nums, num, target) {
  let len = nums.length;
  let s = 0,
    e = len - 1,
    m;
  while (s <= e) {
    m = Math.floor((s + e) / 2);
    if (nums[m] * num === target) return len - m;
    else if (nums[m] * num > target) e = m - 1;
    else s = m + 1;
  }
  return len - s;
}

console.log(successfulPairs([5, 1, 3], [1, 2, 3, 4, 5], 7));
