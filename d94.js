/**-------1871. Jump Game VII---------- */
// DP Solution
var canReach = function (s, minJump, maxJump) {
  let dp = Array(s.length + 1).fill(false);
  dp[0] = true;
  let reachable = 0;
  for (let i = 0; i < dp.length; i++) {
    if (i > maxJump && dp[i - maxJump - 1]) reachable--;
    if (i >= minJump && dp[i - minJump]) reachable++;
    if (s[i - 1] === "0" && reachable > 0) dp[i] = true;
  }
  return dp[dp.length - 1];
};
// BFS Solution
var canReach = function (s, minJump, maxJump) {
  if (s[s.length - 1] != "0") return false;
  const queue = [];
  queue.push(0);
  let maxReach = 0;
  while (queue.length) {
    let idx = queue.shift();
    if (idx === s.length - 1) return true;
    for (
      let j = Math.max(idx + minJump, maxReach);
      j <= Math.min(idx + maxJump, s.length - 1);
      j++
    ) {
      if (s[j] == "0") queue.push(j);
    }
    maxReach = Math.min(idx + maxJump + 1, s.length - 1);
  }

  return false;
};

/**--------134. Gas Station--- */
var canCompleteCircuit = function (gas, cost) {
  let gasC = 0,
    costC = 0;
  for (let i = 0; i < gas.length; i++) {
    gasC += gas[i];
    costC += cost[i];
  }
  if (gasC < costC) return -1;
  let total = 0,
    i = 0;
  let j = 0;
  while (j < gas.length) {
    total += gas[j] - cost[j];
    if (total < 0) {
      i = j + 1;
      total = 0;
    }
    j++;
  }
  return i;
};

/**------------846. Hand of Straights--------- */
var isNStraightHand = function (hand, groupSize) {
  hand.sort((a, b) => a - b);
  let map = {};
  for (let i of hand) {
    map[i] = (map[i] || 0) + 1;
  }
  let unique = Object.keys(map);
  let count = 0;
  let i = 0;
  while (i <= unique.length - groupSize) {
    let num = Number(unique[i]);
    if (map[num]) {
      count++;
      for (let j = 1; j < groupSize; j++) {
        if (!map[num + j]) return false;
        count++;
        map[num + j]--;
      }
      map[num]--;
    } else {
      i++;
    }
  }
  return count === hand.length ? true : false;
};

/**-----------1296. Divide Array in Sets of K Consecutive Numbers---------- */
var isPossibleDivide = function (nums, k) {
  nums.sort((a, b) => a - b);
  let map = {};
  for (let i of nums) {
    map[i] = (map[i] || 0) + 1;
  }
  let unique = Object.keys(map);
  let count = 0;
  let i = 0;
  while (i <= unique.length - k) {
    let num = Number(unique[i]);
    if (map[num]) {
      count++;
      for (let j = 1; j < k; j++) {
        if (!map[num + j]) return false;
        count++;
        map[num + j]--;
      }
      map[num]--;
    } else {
      i++;
    }
  }
  return count === nums.length ? true : false;
};

// slight optimized version
var isPossibleDivide = function (nums, k) {
  if (nums.length % k !== 0) return false;
  nums.sort((a, b) => a - b);
  let map = new Map();
  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  for (let num of nums) {
    let count = map.get(num);
    if (count === 0) continue;
    for (let i = 0; i < k; i++) {
      let next = num + i;
      let nextCount = map.get(next);
      if (nextCount === undefined || nextCount < count) return false;
      map.set(next, nextCount - count);
    }
  }
  return true;
};

//**----649. Dota2 Senate--------- */
var predictPartyVictory = function (senate) {
  let remaining = senate;
  let stack = [];
  let round = "";
  let dTeam = [],
    rTeam = [];
  for (let i = 0; i < senate.length; i++) {
    if (senate[i] === "D") dTeam.push("D");
    else rTeam.push("R");
  }
  let i = 0;
  while (dTeam.length && rTeam.length) {
    if (stack.length === 0 || stack[stack.length - 1] === remaining[i])
      stack.push(remaining[i]), (round += remaining[i]);
    else {
      let voter = stack.pop();
      if (voter == "D") rTeam.pop();
      else dTeam.pop();
    }
    if (i === remaining.length - 1 && round !== "")
      (remaining = round), (i = -1), (round = "");
    i++;
  }
  return rTeam.length !== 0 ? "Radiant" : "Dire";
};
// better space optimized
var predictPartyVictory = function (senate) {
  let radiant = [];
  let dire = [];
  let n = senate.length;
  for (let i = 0; i < n; i++) {
    if (senate[i] === "R") {
      radiant.push(i);
    } else {
      dire.push(i);
    }
  }
  while (radiant.length > 0 && dire.length > 0) {
    if (radiant[0] < dire[0]) {
      radiant.push(radiant[0] + n);
    } else {
      dire.push(dire[0] + n);
    }
    radiant.shift();
    dire.shift();
  }
  return radiant.length > 0 ? "Radiant" : "Dire";
};
// another one with slight space optamization
var predictPartyVictory = function (senate) {
  let senateArr = senate.split("");
  let queue = [];

  for (let s of senateArr) {
    if (!queue.length || queue[queue.length - 1] === s) {
      queue.push(s);
    } else {
      senateArr.push(queue.pop());
    }
  }

  return queue[0] === "R" ? "Radiant" : "Dire";
};

//***-------------1423. Maximum Points You Can Obtain from Cards---------- */
var maxScore = function (cardPoints, k) {
  let preSum = [],
    postSum = [];
  let sum = 0;
  for (let i of cardPoints) {
    sum += i;
    preSum.push(sum);
    postSum.push(-1);
  }
  // we dont want to calculate again!
  if (k === cardPoints.length) return sum;
  sum = 0;
  for (let i = cardPoints.length - 1; i >= 0; i--) {
    sum += cardPoints[i];
    postSum[i] = sum;
  }
  let max = Math.max(preSum[k - 1], postSum[postSum.length - k]);
  let j = k - 2;
  while (j >= 0) {
    let left = preSum[j];
    let right = postSum[postSum.length - (k - 1 - j)];
    max = Math.max(max, left + right);
    j--;
  }
  return max;
};

// Optimized Version
var maxScore = function (cardPoints, k) {
  const size = cardPoints.length;
  let sum = cardPoints.slice(0, k).reduce((sum, num) => sum + num, 0);
  let max = sum;

  for (let i = 1; i <= k; i++) {
    sum = sum + cardPoints[size - i] - cardPoints[k - i];
    max = Math.max(sum, max);
  }

  return max;
};

/**-----------763. Partition Labels---------- */
// find the start and end positon of each letter, then split greedy way based on merge interval
var partitionLabels = function (s) {
  let map = {};
  for (let i = 0; i < s.length; i++) {
    let ltr = s[i];
    if (map[ltr]) map[ltr][1] = i;
    else map[ltr] = [i, i];
  }
  let res = [],
    start = map[s[0]][0],
    end = map[s[0]][1];
  for (let key of Object.keys(map)) {
    if (map[key][0] <= end) {
      if (map[key][0] < start) start = map[key][0];
      if (map[key][1] > end) end = map[key][1];
    } else {
      res.push(end - start + 1);
      (start = map[key][0]), (end = map[key][1]);
    }
  }
  res.push(end - start + 1);
  return res;
};

// Optimized
var partitionLabels = function (s) {
  let map = {};
  for (let i = 0; i < s.length; i++) {
    map[s[i]] = i;
  }
  let start = 0;
  let end = 0;
  let res = [];
  for (let i = 0; i < s.length; i++) {
    end = Math.max(end, map[s[i]]);
    if (i === end) {
      res.push(end - start + 1);
      start = i + 1;
    }
  }
  return res;
};

/**-------------2439. Minimize Maximum of Array---------- */

var minimizeArrayValue = function (nums) {
  let s = 0,
    e = nums.reduce((max, val) => Math.max(max, val)),
    m;
  while (s <= e) {
    m = Math.floor((s + e) / 2);
    if (isPossible(nums, m)) {
      e = m - 1;
    } else {
      s = m + 1;
    }
  }
  return s;
};
function isPossible(arr, val) {
  let prev = arr[0];
  for (let i = 1; i <= arr.length; i++) {
    if (prev > val) return false;
    prev = arr[i] - (val - prev);
  }
  return true;
}

// more optimized o(n) solution
var minimizeArrayValue = function (nums) {
  let result = nums[0],
    sum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    sum += nums[i];
    result = Math.max(result, Math.ceil(sum / (i + 1)));
  }

  return result;
};

/**-----------678. Valid Parenthesis String----------- */
var checkValidString = function (s) {
  let leftStack = [],
    starStack = [];
  for (let i = 0; i < s.length; i++) {
    let sign = s[i];
    if (sign === "(") {
      leftStack.push(i);
    } else if (sign === "*") {
      starStack.push(i);
    } else {
      if (leftStack.length) leftStack.pop();
      else if (starStack.length) starStack.pop();
      else return false;
    }
  }
  while (starStack.length && leftStack.length) {
    if (starStack[starStack.length - 1] > leftStack[leftStack.length - 1]) {
      starStack.pop();
      leftStack.pop();
    } else {
      return false;
    }
  }
  return leftStack.length ? false : true;
};

/**----------1899. Merge Triplets to Form Target Triplet------------ */
var mergeTriplets = function (triplets, target) {
  let first = false,
    second = false,
    third = false;
  for (let i of triplets) {
    if (i[0] <= target[0] && i[1] <= target[1] && i[2] <= target[2]) {
      if (i[0] === target[0]) first = true;
      if (i[1] === target[1]) second = true;
      if (i[2] === target[2]) third = true;
    }
    if (first && second && third) return true;
  }
  return first && second && third;
};

/**------1921. Eliminate Maximum Number of Monsters------- */
var eliminateMaximum = function (dist, speed) {
  let willReach = [];
  for (let i = 0; i < dist.length; i++) {
    willReach.push(Math.ceil(dist[i] / speed[i]));
  }
  willReach.sort((a, b) => a - b);
  let count = 1,
    time = 1;
  let j = 1;
  while (j < willReach.length) {
    if (willReach[j] <= time) break;
    time++, j++, count++;
  }
  return count;
};
