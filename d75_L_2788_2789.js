/** 2788. Split Strings by Separator */
var splitWordsBySeparator = function (words, separator) {
  let res = [];
  for (let i of words) {
    let word = "",
      j = 0;
    while (j < i.length) {
      if (i[j] === separator && word) res.push(word), (word = "");
      if (i[j] !== separator) word += i[j];
      j++;
    }
    if (word) res.push(word);
  }
  return res;
};

/** 2789. Largest Element in an Array after Merge Operations */
var maxArrayValue = function (nums) {
  let max = -Infinity,
    l = (r = nums.length - 1),
    sum = 0;
  while (l >= 0) {
    if (nums[l] > sum) (r = l), (sum = nums[l]);
    else sum += nums[l];
    max = Math.max(max, sum);
    l--;
  }
  return max;
};
