var restoreIpAddresses = function (s) {
  if (s.length < 4 && s.length > 12) return [];
  let res = [];
  function dfs(i, ip) {
    // base cases
    if (ip.length === 4) {
      if (i === s.length) res.push(ip.join("."));
      return;
    }
    if (i === s.length) return;
    // taking the only one
    ip.push(s[i]);
    dfs(i + 1, ip);
    ip.pop();
    let str;
    // taking the two
    if (i + 1 < s.length) {
      str = s[i] + s[i + 1];
      if (str[0] !== "0") {
        ip.push(str);
        dfs(i + 2, ip);
        ip.pop();
      }
    }
    // taking the three
    if (i + 2 < s.length) {
      str = s[i] + s[i + 1] + s[i + 2];
      if (Number(str) >= 0 && Number(str) <= 255 && str[0] !== "0") {
        ip.push(str);
        dfs(i + 3, ip);
        ip.pop();
      }
    }
  }
  dfs(0, []);
  return res;
};

var partition = function (s) {
  let res = [];
  function dfs(sIdx, temp) {
    if (s.length === sIdx) res.push([...temp]);
    for (let i = sIdx; i < s.length; i++) {
      let str = s.slice(sIdx, i + 1);
      if (isPalindrome(str)) {
        temp.push(str);
        dfs(i + 1, temp);
        temp.pop();
      }
    }
  }
  dfs(0, []);
  return res;
};

function isPalindrome(s) {
  let i = 0,
    j = s.length - 1;
  while (i < j) {
    if (s[i] !== s[j]) return false;
    i++, j--;
  }
  return true;
}

var letterCombinations = function (digits) {
  let res = [];
  function dfs(i, temp) {
    if (temp.length === digits.length) {
      let str = temp.join("");
      str && res.push(str);
      return;
    }
    let digit = parseInt(digits[i]);
    let sCharCode = digit > 7 ? 97 + (digit - 2) * 3 + 1 : 97 + (digit - 2) * 3;

    temp.push(String.fromCharCode(sCharCode));
    dfs(i + 1, temp);
    temp.pop();
    temp.push(String.fromCharCode(sCharCode + 1));
    dfs(i + 1, temp);
    temp.pop();
    temp.push(String.fromCharCode(sCharCode + 2));
    dfs(i + 1, temp);
    temp.pop();
    if (digit === 7 || digit === 9) {
      temp.push(String.fromCharCode(sCharCode + 3));
      dfs(i + 1, temp);
      temp.pop();
    }
  }
  dfs(0, []);
  return res;
};
