var combinationSum = function (candidates, target) {
  const res = [];
  const dfs = (i, cur, total) => {
    if (total === target) {
      res.push(cur.slice());
      return;
    }
    if (i >= candidates.length || total > target) {
      return;
    }

    cur.push(candidates[i]);
    dfs(i, cur, total + candidates[i]);
    cur.pop();
    dfs(i + 1, cur, total);
  };

  dfs(0, [], 0);
  return res;
};

var combinationSum = function (candidates, target) {
  let res = [];
  candidates.sort((a, b) => a - b);
  function dfs(startIdx, temp, total) {
    if (total > target) return;
    if (total === target) {
      res.push([...temp]);
      return;
    }
    for (let i = startIdx; i < candidates.length; i++) {
      if (candidates[i] === candidates[i - 1]) continue;
      temp.push(candidates[i]);
      dfs(i, temp, total + candidates[i]);
      temp.pop();
    }
  }
  dfs(0, [], 0);
  return res;
};
