/** ---------54. Spiral Matrix--------------  */

var spiralOrder = function (matrix) {
  let rs = 0,
    re = matrix.length - 1,
    cs = 0,
    ce = matrix[0].length - 1;
  let res = [];
  let total = matrix[0].length * matrix.length;
  while (total > 0) {
    for (let i = cs; (i <= ce) & (total > 0); i++) {
      res.push(matrix[rs][i]);
      total--;
    }
    for (let i = rs + 1; (i <= re) & (total > 0); i++) {
      res.push(matrix[i][ce]);
      total--;
    }
    for (let i = ce - 1; (i > cs) & (total > 0); i--) {
      res.push(matrix[re][i]);
      total--;
    }
    for (let i = re; (i > rs) & (total > 0); i--) {
      res.push(matrix[i][cs]);
      total--;
    }
    cs++, ce--, rs++, re--;
  }
  return res;
};

/** ---- 59. Spiral Matrix II---- */
var generateMatrix = function (n) {
  let rs = 0,
    re = n - 1,
    cs = 0,
    ce = n - 1;
  let res = [];
  for (let i = 0; i < n; i++) {
    res.push([]);
  }
  let num = 1;
  while (num <= n * n) {
    for (let i = cs; (i <= ce) & (num <= n * n); i++) {
      res[rs][i] = num;
      num++;
    }
    for (let i = rs + 1; (i <= re) & (num <= n * n); i++) {
      res[i][ce] = num;
      num++;
    }
    for (let i = ce - 1; (i > cs) & (num <= n * n); i--) {
      res[re][i] = num;
      num++;
    }
    for (let i = re; (i > rs) & (num <= n * n); i--) {
      res[i][cs] = num;
      num++;
    }
    cs++, ce--, rs++, re--;
  }
  return res;
};

console.log(generateMatrix(5));
