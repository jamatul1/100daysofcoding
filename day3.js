var fourSumCount = function (nums1, nums2, nums3, nums4) {
  let res = 0;
  let possibleSums = getPossibleSum(nums3, nums4);
  for (let i = 0; i < nums1.length; i++) {
    let fEl = nums1[i];
    for (let j = 0; j < nums2.length; j++) {
      let sEl = nums2[j];
      let req = -(fEl + sEl);
      if (possibleSums.has(req)) {
        res += possibleSums.get(req);
      }
    }
  }
  return res;
};

function getPossibleSum(nums1, nums2) {
  let possibleSums = new Map();
  for (let i of nums1) {
    for (let j of nums2) {
      if (possibleSums.has(i + j)) {
        let prevVal = possibleSums.get(i + j);
        prevVal++;
        possibleSums.set(i + j, prevVal);
      } else {
        possibleSums.set(i + j, 1);
      }
    }
  }
  return possibleSums;
}

var numberOfBoomerangs = function (points) {
  let res = 0;
  for (let i = 0; i < points.length; i++) {
    let map = {};
    let x1 = points[i][0];
    let y1 = points[i][1];
    for (let j = 0; j < points.length; j++) {
      let x2 = points[j][0];
      let y2 = points[j][1];
      let diffX = x1 - x2;
      let diffY = y1 - y2;
      let distance = Math.sqrt(diffX * diffX + diffY * diffY);
      if (map[distance]) map[distance] += 1;
      else map[distance] = 1;
    }
    for (let i of Object.keys(map)) {
      if (map[i] > 1) res += map[i] * (map[i] - 1);
    }
  }
  return res;
};

console.log(
  numberOfBoomerangs([
    [1, 1],
    [2, 2],
    [3, 3],
  ])
);
