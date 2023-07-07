var maxConsecutiveAnswers = function (answerKey, k) {
  function findMax(answer) {
    let l = (r = 0);
    let max = -Infinity;
    let used = 0;
    while (r < answerKey.length) {
      if (answerKey[r] === answer) used++;
      while (used > k) {
        if (answerKey[l++] === answer) used--;
      }

      max = Math.max(max, r - l + 1);
      r++;
    }
    return max;
  }
  return Math.max(findMax("T"), findMax("F"));
};
