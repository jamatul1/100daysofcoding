// **** - more this types of problem need to be solved
var minFlips = function (s) {
  // double the string
  let dS = s + s;
  // create the two alternates
  let alt1 = (alt2 = "");
  for (let i = 0; i < s.length * 2; i++) {
    if (i % 2 === 0) {
      alt1 += "0";
      alt2 += "1";
    } else {
      alt1 += "1";
      alt2 += "0";
    }
  }
  let diff1 = (diff2 = mDiff = 0);
  // create the window and find the diff
  for (let i = 0; i < s.length; i++) {
    diff1 += alt1[i] === dS[i] ? 0 : 1;
    diff2 += alt2[i] === dS[i] ? 0 : 1;
  }
  mDiff = Math.min(diff1, diff2);
  if (mDiff === 0) return 0;
  let left = 0;
  // slide the window and update the min
  for (let i = s.length; i < dS.length; i++) {
    // cut off the window
    if (dS[left] !== alt1[left]) diff1 -= 1;

    if (dS[left] !== alt2[left]) diff2 -= 1;

    if (dS[i] !== alt1[i]) diff1 += 1;

    if (dS[i] !== alt2[i]) diff2 += 1;

    // find the minimum
    mDiff = Math.min(mDiff, Math.min(diff1, diff2));
    // extend the window
    left++;
  }
  return mDiff;
};

var validPalindrome = function (s) {
  let left = 0,
    right = s.length - 1;
  let done = false;
  while (left < right) {
    if (s[left] !== s[right]) {
      console.log(s[left], s[right]);
      if (s[left + 1] === s[right] && !done) left++, (done = true);
      else if (s[left] === s[right - 1] && !done) right--, (done = true);
      else return false;
    }
    left++, right--;
  }
  return true;
};

// It's fail at the consoled test case:

// "Easier Solution"
var validPalindrome = (s) => {
  let i = 0,
    j = s.length - 1;
  while (i < j) {
    if (s[i] !== s[j]) {
      return isPalindrome(cut(s, i)) || isPalindrome(cut(s, j));
    }
    i++, j--;
  }
  return true;
};

const cut = (s, i) => s.substr(0, i) + s.substr(i + 1);

function isPalindrome(s) {
  let i = 0,
    j = s.length - 1;
  while (i < j) {
    if (s[i] !== s[j]) return false;
    i++, j--;
  }
  return true;
}

var validPalindrome = function (s) {
  let low = 0,
    high = s.length - 1;
  while (low < high) {
    if (s[low] !== s[high]) {
      return isPalindrome(s, low + 1, high) || isPalindrome(s, low, high - 1);
    }
    low++, high--;
  }
  return true;
};

function isPalindrome(str, low, high) {
  while (low < high) {
    if (str[low] !== str[high]) return false;
    low++, high--;
  }
  return true;
}
// console.log(
//   validPalindrome(
//     "aguokepatgbnvfqmgmlcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupuculmgmqfvnbgtapekouga"
//   )
// );
var minimumDifference = function (nums, k) {
  nums.sort((a, b) => a - b);
  let mDiff = Infinity;
  let i = 0;
  let j = k - 1;
  while (j < nums.length) {
    mDiff = Math.min(mDiff, nums[j] - nums[i]);
    i++;
    j++;
  }
  return mDiff;
};

// console.log(
//   minimumDifference([87063, 61094, 44530, 21297, 95857, 93551, 9918], 6)
// );

var changeSequence = function (nums) {
  nums.sort((a, b) => a - b);
  let i = 1;
  while (i < nums.length - 1) {
    let temp = nums[i];
    nums[i] = nums[i + 1];
    nums[i + 1] = temp;
    i += 2;
  }
  return nums;
};
function validate(nums) {
  console.log(nums);
  let i = 1;
  while (i < nums.length - 1) {
    let avg = (nums[i - 1] + nums[i + 1]) / 2;
    if (avg === nums[i]) {
      return false;
    }
    i++;
  }
  return true;
}
console.log(validate(changeSequence([1, 2, 5, 8, 10, 12])));
