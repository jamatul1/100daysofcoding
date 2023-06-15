var buyChoco = function (prices, money) {
  let sm1 = Infinity,
    sm2 = Infinity;
  let sm1Idx, sm2Idx;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < sm1) {
      sm1 = prices[i];
      sm1Idx = i;
    }
  }
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < sm2 && i !== sm1Idx) {
      sm2 = prices[i];
      sm2Idx = i;
    }
  }
  if (prices[sm1] + prices[sm2] > money) return money;
  return money - (sm1 + sm2);
};
