var numSubseq = function (nums, target) {
  nums.sort((a, b) => a - b);
  let i = 0;
  let nCounts = 0;
  let eCounts = 0;
  while (i < nums.length) {
    if (nums[i] + nums[0] > target) {
      break;
    }
    if (nums[i] * 2 > target) nCounts++;
    if (nums[i] * 2 === target) eCounts++;
    i++;
  }
  if (nCounts == 0) eCounts = 0;
  let total = Math.pow(2, i) - 1 - (Math.pow(2, nCounts) - 1) - eCounts;
  return total;
};

// need to study more on modulas and permutation and combination
var numSubseq = function (nums, target) {
  nums.sort((a, b) => a - b);
  let left = 0,
    right = nums.length - 1;
  let mod = Math.pow(10, 9) + 7;
  let res = 0;
  const sqCount = [1];
  for (let i = 1; i < nums.length; i++) {
    sqCount.push((sqCount[i - 1] * 2) % mod);
  }
  while (left <= right) {
    let total = nums[right] + nums[left];
    if (total <= target) {
      res += sqCount[right - left];
      res = res % mod;
      left++;
    }
    if (total > target) {
      right--;
    }
  }
  return res;
};

var numRescueBoats = function (people, limit) {
  let counts = 0;
  let left = 0,
    right = people.length - 1;
  // this sorting portion can be optamized with count sort
  people.sort((a, b) => a - b);
  while (left <= right) {
    if (people[right] + people[left] <= limit) {
      left++;
    }
    right--;
    counts++;
  }
  return counts;
};

// this approche is failed with time limit
// but leetcode didnot provide the test case
// instead their message was  it has passed in all the test cases
var trap = function (height) {
  let trappedRain = 0;
  let left = 0,
    right = 0;
  // find the first left max;
  while (height[left] === 0) {
    left++;
  }
  while (left < height.length - 1) {
    //we have the left max
    //now find the right max
    //and all the fillup
    let filled = 0;
    right = left + 1;
    let maxRight = right;
    let maxRightVal = height[right];
    while (height[right] <= height[left] && right < height.length) {
      if (maxRightVal <= height[right]) {
        maxRightVal = height[right];
        maxRight = right;
      }
      if (height[right] > 0) {
        filled += height[right];
      }
      right++;
    }
    // last one was the largest
    if (maxRightVal < height[right]) maxRight = right;
    // prevone is largest right
    // now fill need to be reset
    else {
      let i = maxRight;
      while (i < right) {
        filled -= height[i];
        i++;
      }
    }
    // adjust right to the maxRight not the end
    right = maxRight;
    // calculate the trapped rain inbetween them
    let trappedHeight = Math.min(height[left], height[right]);
    let trappedWidth = right - left - 1;
    trappedRain += trappedHeight * trappedWidth - filled;

    // the rightmax is new left max
    left = right;
  }
  return trappedRain;
};

// final solution
var trap = function (height) {
  let n = height.length;
  let maxLeft = height[0],
    maxRight = height[n - 1];
  let left = 1,
    right = n - 2;
  let ans = 0;
  while (left <= right) {
    if (maxLeft < maxRight) {
      if (height[left] > maxLeft) maxLeft = height[left];
      else ans += maxLeft - height[left];
      left++;
    } else {
      if (height[right] > maxRight) {
        maxRight = height[right];
      } else ans += maxRight - height[right];
      right--;
    }
  }
  return ans;
};
