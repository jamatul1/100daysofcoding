// ----50. Pow(x, n)---
var myPow = function (x, n) {
  function getPower(x, n) {
    if (n === 0) return 1;
    if (x === 0) return 0;
    let res = getPower(x, Math.floor(n / 2));
    res = res * res;
    return n % 2 !== 0 ? x * res : res;
  }
  let power = getPower(x, Math.abs(n));
  return n < 0 ? 1 / power : power;
};

//     ---1260. Shift 2D Grid----
var shiftGrid = function (grid, k) {
  k = k % (grid.length * grid[0].length);
  if (k == 0) return grid;
  let shifted = [];
  for (let i = 0; i < grid.length; i++) shifted.push([]);
  let i = (j = 0);
  let rotateSize = k;
  let startPointR = Math.floor(
    (grid.length * grid[0].length - k) / grid[0].length
  );
  let startPointC = (grid.length * grid[0].length - k) % grid[0].length;
  for (let r = startPointR; r < grid.length; r++) {
    for (c = 0; c < grid[0].length; c++) {
      if (r === startPointR && c < startPointC) continue;
      shifted[i][j] = grid[r][c];
      j++;
      if (j >= grid[0].length) (j = 0), i++;
      rotateSize--;
      if (rotateSize <= 0) break;
    }
  }
  for (let r = 0; r < grid.length && i < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      shifted[i][j] = grid[r][c];
      j++;
      if (j >= grid[0].length) (j = 0), i++;
      if (i >= grid.length) break;
    }
  }
  return shifted;
};

// 50. Pow(x, n)
// 1260. Shift 2D Grid
