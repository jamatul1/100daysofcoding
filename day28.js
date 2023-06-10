var pushDominoes = function (dominoes) {
  let res = [...dominoes];
  let queue = [];
  res.forEach((val, i) => {
    if (val !== ".") queue.push({ idx: i, val });
  });
  while (queue.length) {
    let { idx, val } = queue.shift();
    if (val === "L" && idx > 0 && res[idx - 1] === ".") {
      queue.push({ idx: idx - 1, val: "L" });
      res[idx - 1] = "L";
    } else if (val === "R") {
      if (idx + 1 < res.length && res[idx + 1] === ".") {
        if (idx + 2 < res.length && res[idx + 2] === "L") {
          queue.shift();
        } else {
          queue.push({ idx: idx + 1, val: "R" });
          res[idx + 1] = "R";
        }
      }
    }
  }
  return res;
};

var arraySign = function (nums) {
  let ans = 1;
  for (let x of nums) {
    if (x == 0) return 0;
    if (x < 0) ans = -ans;
  }
  return ans;
};
