/**------------------------2001. Number of Pairs of Interchangeable Rectangles------------ */
var interchangeableRectangles = function (rectangles) {
  let map = {};
  let res = 0;
  for (let i = 0; i < rectangles.length; i++) {
    const rectangle = rectangles[i];
    let ratio = rectangle[0] / rectangle[1];
    if (!map[ratio]) {
      map[ratio] = 0;
    }
    res += map[ratio];
    map[ratio]++;
  }
  return res;
};

/**-----------------1615. Maximal Network Rank-------------- */
var maximalNetworkRank = function (n, roads) {
  let degrees = new Array(n).fill(0);
  let roadsSet = new Set();

  for (let road of roads) {
    degrees[road[0]]++;
    degrees[road[1]]++;
    roadsSet.add(road[0] + "," + road[1]);
    roadsSet.add(road[1] + "," + road[0]);
  }

  let max = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let rank = degrees[i] + degrees[j];
      if (roadsSet.has(i + "," + j)) {
        rank--;
      }
      max = Math.max(max, rank);
    }
  }

  return max;
};
