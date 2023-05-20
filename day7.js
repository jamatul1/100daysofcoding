var removeDuplicates = function (nums) {
  let p1 = 0,
    p2 = 1;
  let count = 1;
  while (p2 < nums.length) {
    if (nums[p2] === nums[p1]) {
      count++;
      if (count <= 2) {
        p1++;
        nums[p1] = nums[p2];
      }
    } else {
      count = 1;
      // replacement
      p1++;
      nums[p1] = nums[p2];
    }

    p2++;
  }
  return p1 + 1;
};

// var compareVersion = function (version1, version2) {
//   // split them
//   let ver1 = version1.split(".");
//   let ver2 = version2.split(".");
//   if (ver1.length !== ver2.length) {
//     if (ver1.length < ver2.length) {
//       let len = ver2.length - ver1.length;
//       for (let i = 0; i < len; i++) {
//         ver1.push("0");
//       }
//     } else {
//       let len = ver1.length - ver2.length;
//       for (let i = 0; i < len; i++) {
//         ver2.push("0");
//       }
//     }
//   }
//   for (let i = 0; i < ver1.length; i++) {
//     let a = ver1[i].length === 1 ? ver1[i] : trimStr(ver1[i]);
//     let b = ver1[i].length === 1 ? ver2[i] : trimStr(ver2[i]);
//     if (Number(a) > Number(b)) {
//       return 1;
//     } else if (Number(a) < Number(b)) {
//       return -1;
//     }
//   }
//   return 0;
//   // compare them
// };

// function trimStr(str) {
//   let trimmed = "";
//   // find the non zero
//   let i = 0;
//   while (str[i] === "0") {
//     i++;
//   }
//   while (i < str.length) {
//     trimmed += str[i];
//     i++;
//   }
//   return trimmed ? trimmed : "0";
// }

var compareVersion = function (version1, version2) {
  let val1 = (val2 = "0");
  let p1 = (p2 = 0);
  let r1 = (r2 = false);
  while (p1 < version1.length || p2 < version2.length) {
    // encounter  .
    version1[p1] === "." && (r1 = true);
    version2[p2] === "." && (r2 = true);
    p1 >= version1.length && (r1 = true);
    p2 >= version2.length && (r2 = true);
    // all values are ready
    if (r1 && r2) {
      if (Number(val1) > Number(val2)) return 1;
      else if (Number(val1) < Number(val2)) return -1;
      val1 = val2 = "0";
      p1++, p2++;
      r1 = r2 = false;
      continue;
    }

    // prev val is zero and not ready
    // update vals
    if (val1 === "0" && p1 < version1.length && !r1) {
      val1 = version1[p1];
      p1++;
    } else if (val1 !== "0" && p1 < version1.length && !r1) {
      val1 += version1[p1];
      p1++;
    }
    if (val2 === "0" && p2 < version2.length && !r2) {
      val2 = version2[p2];
      p2++;
    } else if (val2 !== "0" && p2 < version2.length && !r2) {
      val2 += version2[p2];
      p2++;
    }
  }
  if (Number(val1) > Number(val2)) return 1;
  else if (Number(val1) < Number(val2)) return -1;
  return 0;
};

var moveZeroes = function (nums) {
  let p = (c = 0);
  while (c < nums.length) {
    // non zero
    if (nums[c] !== 0) {
      nums[p] = nums[c];
      p !== c && (nums[c] = 0);
      p++;
    }
    // zero
    c++;
  }
};

var reverseString = function (s) {
  let l = 0,
    r = s.length - 1;
  while (l < r) {
    let temp = s[l];
    s[l] = s[r];
    s[r] = temp;
    l++, r--;
  }
};

// using hash map
var findPairs = function (nums, k) {
  let map = new Map();
  let count = 0;

  for (let i of nums) {
    // when k is not zero
    // if not in the map
    if (!map.has(i) && k !== 0) {
      // is there two possible
      map.has(k + i) && count++;
      map.has(i - k) && count++;
      map.set(i, true);
    } else if (k === 0) {
      if (map.has(i)) {
        let prevVal = map.get(i) + 1;
        map.set(i, prevVal);
      } else map.set(i, 1);
    }
  }
  // when k is zero
  if (k === 0) {
    for (let i of map.keys()) {
      map.get(i) > 1 && count++;
    }
  }
  return count;
};

// using two pointer
var findPairs = function (nums, k) {
  let p = (c = count = 0);
  nums.sort((a, b) => a - b);
  while (p < nums.length - 1) {
    c = p + 1;
    while (Math.abs(nums[p] - nums[c]) <= k) {
      if (Math.abs(nums[p] - nums[c]) === k) {
        count++;
        break;
      }
      c++;
    }
    // shifting pointer to the right
    c = p + 1;
    while (nums[p] === nums[c]) {
      c++;
    }
    p = c;
  }
  return count;
};

console.log(findPairs([-5, 4], 8));
