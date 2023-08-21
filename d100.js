/**--------1626. Best Team With No Conflicts--------- */
var bestTeamScore = function (scores, ages) {
  let pair = [];
  for (let i = 0; i < scores.length; i++) {
    pair.push([ages[i], scores[i]]);
  }
  pair.sort((a, b) => (a[0] == b[0] ? a[1] - b[1] : a[0] - b[0]));

  let dp = new Array(scores.length).fill(0);
  dp[0] = pair[0][1];

  for (let i = 1; i < pair.length; i++) {
    let [age, score] = pair[i];
    dp[i] = score;
    for (let j = i - 1; j >= 0; j--) {
      let [pAge, pScore] = pair[j];
      if (pAge == age) dp[i] = Math.max(dp[i], dp[j] + score);
      else {
        if (score >= pScore) {
          dp[i] = Math.max(dp[i], dp[j] + score);
        }
      }
    }
  }
  return Math.max(...dp);
};

/**-----459. Repeated Substring Pattern-------- */
var repeatedSubstringPattern = function (s) {
  const len = s.length;
  for (let i = 1; i <= len / 2; i++) {
    if (len % i === 0) {
      const str = s.slice(0, i);
      let pStr = "";
      for (let j = 0; j < len / i; j++) {
        pStr += str;
      }
      if (pStr === s) return true;
    }
  }
  return false;
};
