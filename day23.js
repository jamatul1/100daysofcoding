var checkStraightLine = function (coordinates) {
  coordLen = coordinates.length;

  if (coordLen <= 2) return true;

  function calculateSlope(x1, y1, x2, y2, x, y) {
    return (y2 - y1) * (x - x1) - (y - y1) * (x2 - x1);
  }

  let [x1, y1] = coordinates[0];
  let [x2, y2] = coordinates[1];

  for (let i = 2; i < coordinates.length; i++) {
    let [x, y] = coordinates[i];
    if (calculateSlope(x1, y1, x2, y2, x, y) !== 0) {
      return false;
    }
  }

  return true;
};

var checkPossibility = function (nums) {
  let done = false;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] <= nums[i + 1]) {
      continue;
    }
    console.log(done);
    if (done) return false;
    if (i === 0 || nums[i - 1] < nums[i + 1]) {
      nums[i] = nums[i + 1];
      done = true;
    } else {
      nums[i] = nums[i - 1];
      done = true;
    }
  }
  return true;
};

console.log(checkPossibility([3, 4, 2, 3]));
