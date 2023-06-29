class Node {
  constructor() {
    this.childrens = [];
    this.eow = false;
    for (let i = 0; i < 26; i++) {
      this.childrens[i] = null;
    }
  }
}
var Trie = function () {
  this.root = new Node();
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let cur = this.root;
  for (let char of word) {
    let pos = char.charCodeAt(0) - 97;
    if (!cur.childrens[pos]) {
      let node = new Node();
      cur.childrens[pos] = node;
    }
    cur = cur.childrens[pos];
  }
  cur.eow = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let cur = this.root;
  for (let char of word) {
    let pos = char.charCodeAt(0) - 97;
    if (cur.childrens[pos]) {
      cur = cur.childrens[pos];
    } else return false;
  }
  if (cur.eow) return true;
  return false;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let cur = this.root;
  for (let char of prefix) {
    let pos = char.charCodeAt(0) - 97;
    if (cur.childrens[pos]) {
      cur = cur.childrens[pos];
    } else return false;
  }
  return true;
};

class Node {
  constructor() {
    this.childrens = [];
    this.eow = false;
    for (let i = 0; i < 26; i++) {
      this.childrens[i] = null;
    }
  }
}

var WordDictionary = function () {
  this.root = new Node();
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  let cur = this.root;
  for (let char of word) {
    let pos = char.charCodeAt(0) - 97;
    if (!cur.childrens[pos]) {
      let node = new Node();
      cur.childrens[pos] = node;
    }
    cur = cur.childrens[pos];
  }
  cur.eow = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  function dfs(j, root) {
    let cur = root;
    for (let i = j; i < word.length; i++) {
      if (word[i] === ".") {
        for (let child of cur.childrens) {
          if (child) if (dfs(i + 1, child)) return true;
        }
        return false;
      } else {
        let pos = word[i].charCodeAt(0) - 97;
        if (!cur.childrens[pos]) return false;
        else {
          cur = cur.childrens[pos];
        }
      }
    }
    return cur.eow;
  }
  return dfs(0, this.root);
};
