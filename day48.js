var subsetsWithDup = function (nums) {
  let res = [];
  nums.sort((a, b) => a - b);
  function backtrack(temp, startIdx) {
    if (startIdx >= nums.length) {
      return;
    }
    let val = nums[startIdx];
    // pick
    temp.push(val);
    backtrack(temp, startIdx + 1);
    // add to result
    res.push([...temp]);
    // not pick
    temp.pop();
    backtrack(temp, startIdx + 1);
  }
  backtrack([], 0);
  return res;
};

var subsets = function (nums) {
  let res = [[]];
  for (let i of nums) {
    let len = res.length;
    for (let j = 0; j < len; j++) {
      let item = [...res[j]];
      item.push(i);
      res.push(item);
    }
  }
  return res;
};

console.log(subsets([1, 2, 3]));
