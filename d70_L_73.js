var setZeroes = function (matrix) {
  let rLen = matrix.length,
    cLen = matrix[0].length,
    zeroInFCol = false;
  for (let i = 0; i < rLen; i++) {
    if (!matrix[i][0]) zeroInFCol = true;
    for (let j = 1; j < cLen; j++) {
      if (!matrix[i][j]) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }
  for (let i = 1; i < rLen; i++) {
    for (let j = 1; j < cLen; j++) {
      if (!matrix[i][0] || !matrix[0][j]) matrix[i][j] = 0;
    }
  }
  if (!matrix[0][0]) {
    for (let j = 0; j < cLen; j++) matrix[0][j] = 0;
  }
  if (zeroInFCol) {
    for (let i = 0; i < rLen; i++) {
      matrix[i][0] = 0;
    }
  }
};
