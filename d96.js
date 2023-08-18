/**----------542. 01 Matrix---------- */
var updateMatrix = function (mat) {
  const n = mat.length;
  const m = mat[0].length;
  const dir = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  const queue = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (mat[i][j] === 0) {
        queue.push([i, j]);
      } else {
        mat[i][j] = Infinity;
      }
    }
  }

  while (queue.length > 0) {
    const [row, col] = queue.shift();
    for (const [dr, dc] of dir) {
      const cRow = row + dr;
      const cCol = col + dc;

      if (
        cRow >= 0 &&
        cRow < n &&
        cCol >= 0 &&
        cCol < m &&
        mat[cRow][cCol] > mat[row][col] + 1
      ) {
        mat[cRow][cCol] = mat[row][col] + 1;
        queue.push([cRow, cCol]);
      }
    }
  }

  return mat;
};
