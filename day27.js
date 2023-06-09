var maxProfit = function (prices) {
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) profit += prices[i] - prices[i - 1];
  }
  return profit;
};

var pushDominoes = function (dominoes) {
  let ans = "";
  let l = -1;
  for (let i = 0; i < dominoes.length; i++) {
    while (dominoes[i] === ".") {
      i++;
    }
    if (
      dominoes[i] &&
      dominoes[i] === "L" &&
      dominoes[l] &&
      dominoes[l] === "R"
    ) {
      let mid = l + Math.floor((i - l - 1) / 2);
      for (let j = l; j < mid; j++) {
        ans += "R";
      }
      if ((i - l - 1) % 2 !== 0) ans += dominoes[mid + 1];
      for (let j = i - mid + 1; j <= i; j++) {
        ans += "L";
      }
    } else if (dominoes[i] && dominoes[i] === "L") {
      for (let j = l + 1; j <= i && j < dominoes.length; j++) {
        ans += "L";
      }
    } else if (dominoes[l] && dominoes[l] === "R") {
      for (let j = l + 1; j <= i && j < dominoes.length; j++) {
        ans += "R";
      }
    } else {
      for (let j = l + 1; j <= i && j < dominoes.length; j++) {
        ans += dominoes[j];
      }
    }
    l = i;
  }
  return ans;
};

var nextGreatestLetter = function (letters, target) {
  let s = 0,
    e = letters.length - 1,
    m;
  while (s <= e) {
    m = Math.floor((s + e) / 2);
    if (letters[m] > target) e = m - 1;
    else s = m + 1;
  }
  return letters[s] ? letters[s] : letters[0];
};

console.log(nextGreatestLetter(["x", "y", "y"], "z"));
