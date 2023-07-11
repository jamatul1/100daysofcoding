/* ----------Leetcode- 394. Decode String--------------*/

var decodeString = function (s) {
  let stack = [],
    curStr = "",
    curDigit = 0;

  // current string will held the result
  for (let i of s) {
    // save in the stack
    if (i === "[") {
      stack.push(curStr);
      stack.push(curDigit);
      curStr = "";
      curDigit = 0;
    }
    // retrieve from the stack and process it
    else if (i === "]") {
      let prevDigit = stack.pop();
      let prevStr = stack.pop();
      curStr = prevStr + curStr.repeat(prevDigit);
    }
    // if i is a digit add to the digit
    else if (!isNaN(i)) {
      curDigit = curDigit * 10 + parseInt(i);
    }
    // it is a letter just add it
    else {
      curStr += i;
    }
  }
  return curStr;
};
