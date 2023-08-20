/**---2825. Make String a Subsequence Using Cyclic Increments---- */
var canMakeSubsequence = function (str1, str2) {
  let i = 0,
    j = 0;
  for (let i = 0; i < str1.length; i++) {
    let char = str1[i];
    if (char != "z") {
      if (char == str2[j]) {
        j++;
      } else if (String.fromCodePoint(char.charCodeAt(0) + 1) == str2[j]) {
        j++;
      }
    } else {
      if (char == str2[j]) {
        j++;
      } else if ("a" == str2[j]) {
        j++;
      }
    }
  }
  return j === str2.length ? true : false;
};

/**--------2634. Filter Elements from Array------- */
var filter = function (arr, fn) {
  let filtered = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) filtered.push(arr[i]);
  }
  return filtered;
};

/**----463. Island Perimeter------ */
var islandPerimeter = function (grid) {
  let set = new Set();
  function dfs(i, j) {
    if (
      i >= grid.length ||
      j >= grid[0].length ||
      i < 0 ||
      j < 0 ||
      grid[i][j] === 0
    )
      return 1;
    if (set.has(i + "," + j)) return 0;
    set.add(i + "," + j);
    let perimeter = 0;
    perimeter += dfs(i, j + 1);
    perimeter += dfs(i, j - 1);
    perimeter += dfs(i + 1, j);
    perimeter += dfs(i - 1, j);
    return perimeter;
  }
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j]) return dfs(i, j);
    }
  }
};
