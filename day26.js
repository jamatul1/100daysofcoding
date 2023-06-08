var countNegatives = function (grid) {
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] < 0) {
        if (j === 0) {
          count += (grid.length - i) * grid[i].length;
          i = grid.length;
        } else {
          count += grid[i].length - j;
        }
        break;
      }
    }
  }
  return count;
};

console.log(
  countNegatives([
    [4, 3, 2, -1],
    [3, 2, 1, -1],
    [1, 1, -1, -2],
    [-1, -1, -2, -3],
  ])
);
