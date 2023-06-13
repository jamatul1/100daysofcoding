var equalPairs = function (grid) {
  let rowMap = {};
  let colMap = {};
  for (let i = 0; i < grid.length; i++) {
    let row = "";
    let col = "";
    for (let j = 0; j < grid[i].length; j++) {
      row += grid[i][j] + ",";
      col += grid[j][i] + ",";
    }
    rowMap[row] = (rowMap[row] || 0) + 1;
    colMap[col] = (colMap[col] || 0) + 1;
  }
  let ans = 0;
  for (let i of Object.keys(rowMap)) {
    if (colMap[i]) ans += colMap[i] * rowMap[i];
  }
  return ans;
};

console.log(
  equalPairs([
    [11, 1],
    [1, 11],
  ])
);
