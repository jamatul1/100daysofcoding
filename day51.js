var exist = function (board, word) {
  function bt(x, y, word, visited) {
    if (!word.length) return true;
    if (
      visited[x + "," + y] ||
      x < 0 ||
      x >= board.length ||
      y < 0 ||
      y >= board[0].length ||
      word[0] !== board[x][y]
    )
      return false;
    // now move through the space
    let newWord = word.slice(1);
    visited[x + "," + y] = true;

    let res =
      bt(x + 1, y, newWord, visited) ||
      bt(x, y - 1, newWord, visited) ||
      bt(x - 1, y, newWord, visited) ||
      bt(x, y + 1, newWord, visited);
    visited[x + "," + y] = false;
    return res;
  }
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (bt(i, j, word, {})) return true;
    }
  }

  return false;
};

var findWords = function (board, words) {
  let trie = {};
  const res = [];
  function buildTrie(trie) {
    for (let word of words) {
      let obj = trie;
      for (let c of word) {
        if (!obj[c]) obj[c] = {};
        obj = obj[c];
      }
      obj.isWord = word;
    }
  }
  buildTrie(trie);
  console.log(trie);
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      let char = board[i][j];
      if (trie[char]) {
        dfs(i, j, trie);
      }
    }
  }
  return res;

  function dfs(i, j, obj) {
    if (
      i < 0 ||
      i >= board.length ||
      j < 0 ||
      j >= board[0].length ||
      !obj[board[i][j]]
    )
      return;
    if (obj[board[i][j]].isWord) {
      res.push(obj[board[i][j]].isWord);
      obj[board[i][j]].isWord = null;
    }

    let temp = board[i][j];
    obj = obj[board[i][j]];
    board[i][j] = "#";
    dfs(i + 1, j, obj);
    dfs(i - 1, j, obj);
    dfs(i, j + 1, obj);
    dfs(i, j - 1, obj);
    board[i][j] = temp;
  }
};
class TrieNode {
  constructor() {
    this.childrens = {};
    this.isWord = false;
  }
}
class Trie {
  constructor() {
    this.root = new TrieNode();
  }
  addNode(word) {
    let cur = this.root;
    for (let i of word) {
      if (!cur.childrens[i]) cur.childrens[i] = new TrieNode();
      cur = cur.childrens[i];
    }
    cur.isWord = true;
  }
  getRoot() {
    return this.root;
  }
}
var findWords = function (board, words) {
  let res = {};
  let trie = new Trie();
  for (let i of words) {
    trie.addNode(i);
  }
  let root = trie.getRoot();
  let visited = {};
  function dfs(x, y, node, word) {
    if (
      x < 0 ||
      x >= board.length ||
      y < 0 ||
      y >= board[0].length ||
      visited[x + "," + y] ||
      !node.childrens[board[x][y]]
    )
      return;
    word += board[x][y];
    visited[x + "," + y] = true;
    let child = node.childrens[board[x][y]];
    if (child.isWord) {
      if (!res[word]) res[word] = word;
    }
    dfs(x + 1, y, child, word);
    dfs(x - 1, y, child, word);
    dfs(x, y + 1, child, word);
    dfs(x, y - 1, child, word);
    visited[x + "," + y] = false;
    word = word.slice(0, word.length - 1);
  }
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      dfs(i, j, root, "");
    }
  }
  return Object.keys(res).map((k) => res[k]);
};
