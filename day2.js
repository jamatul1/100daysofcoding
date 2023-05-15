// 1st apprach

var nextGreaterElement = function (nums1, nums2) {
  let indexMap = new Map();
  let shouldFind = [];
  let result = [];

  for (let i = 0; i < nums1.length; i++) {
    indexMap.set(nums1[i], i);
    result.push(-1);
  }

  for (let i = 0; i < nums2.length; i++) {
    let current = nums2[i];
    while (shouldFind.length && current > shouldFind[shouldFind.length - 1]) {
      let value = shouldFind.pop();
      let index = indexMap.get(value);
      result[index] = current;
    }
    if (indexMap.has(current)) {
      shouldFind.push(current);
    }
  }

  return result;
};

var findDuplicate = function (nums) {
  let i = 0;
  while (i < nums.length) {
    while (nums[i] !== i + 1) {
      if (nums[nums[i] - 1] === nums[i]) break;
      let temp = nums[nums[i] - 1];
      nums[nums[i] - 1] = nums[i];
      nums[i] = temp;
    }
    i++;
  }
  return nums[nums.length - 1];
};
