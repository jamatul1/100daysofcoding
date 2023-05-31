var numUniqueEmails = function (emails) {
  let map = {};
  for (let e of emails) {
    let pEmail = "";
    let i = 0;
    while (e[i] !== "@") {
      let char = e[i];
      if (char === ".") {
        i++;
        continue;
      } else if (char === "+") {
        while (e[i] !== "@") {
          i++;
        }
        break;
      }
      pEmail += e[i];
      i++;
    }
    while (i < e.length) {
      pEmail += e[i];
      i++;
    }
    map[pEmail] = (map[pEmail] || 0) + 1;
  }
  let count = 0;
  for (let i of Object.keys(map)) {
    count++;
  }
  return count;
};
