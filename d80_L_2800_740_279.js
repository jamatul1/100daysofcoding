/**-----2800. Shortest String That Contains Three Strings----- */
function findOverlappingPair(str1, str2) {
    let a = str1, b = str2
    if(a.includes(b)) return a;
    else if(b.includes(a)) return b;
    for(let i = str2.length - 1; i > 0 ; i--){
        let fromB = b.slice(0,i)
        let lastIndexOf = a.lastIndexOf(fromB)
        if(lastIndexOf !== -1 && lastIndexOf+fromB.length  === a.length){
            return a.slice(0,lastIndexOf)+b
        }
    }
    return str1 + str2;
  }
  var minimumString = function (a, b, c) {
    let aIntB = findOverlappingPair(a, b);
    let aIntC = findOverlappingPair(a, c);
    let bIntC = findOverlappingPair(b, c);
    let bIntA = findOverlappingPair(b, a);
    let cIntA = findOverlappingPair(c, a);
    let cIntB = findOverlappingPair(c, b);
    let res = [];
    res.push(findOverlappingPair(aIntB, c));
    res.push(findOverlappingPair(aIntC, b));
    res.push(findOverlappingPair(bIntC, a));
    res.push(findOverlappingPair(bIntA, c));
    res.push(findOverlappingPair(cIntA, b));
    res.push(findOverlappingPair(cIntB, a));
    let minLen = Infinity;
    for (let i of res) {
      if (minLen > i.length) minLen = i.length;
    }
    let final = [];
    for (let i of res) {
      if (minLen === i.length) final.push(i);
    }
    final.sort();
    return final[0];
  };


  /** -------740. Delete and Earn-------- */
  var deleteAndEarn = function(nums) {
    let countMap = {}
    for(let i of nums){
        countMap[i] =  (countMap[i] || 0 ) + 1
    }
    nums = Array.from(new Set(nums)).sort((a,b) => a - b)
    let prevEarn = 0, curEarn = 0;
    for(let i = 0 ;i < nums.length; i++){
        let earn = nums[i]*countMap[nums[i]]
        // we can't add the prev earn
        if(nums[i-1] && nums[i]-1 === nums[i-1]){
           let temp = prevEarn
           prevEarn = curEarn
           curEarn = Math.max(temp + earn,prevEarn)
        }else{
            let temp = prevEarn
           prevEarn = curEarn
           curEarn = Math.max(curEarn + earn,temp) 
        }
    }
    return curEarn
};

/**-------279. Perfect Squares--------- */
var numSquares = function(n) {
    let squares = []
    for(let i = 1; i*i <= n;i++){
        squares.push(i*i)
    }
    let dp = Array(squares.length+1).fill().map(() => Array(n+1).fill(0))
    for(let j = 1; j <= n ;j++){
        dp[0][j] = n+1
    }
    for(let i = 1; i < dp.length; i++){
        for(let j = 1; j <= n; j++ ){
            if(squares[i-1] <= j) {
                dp[i][j] = Math.min(1+dp[i][j-squares[i-1]],dp[i-1][j])
            }else{
                dp[i][j] = dp[i-1][j]
            }
        }
    }
    return dp[squares.length][n]
};

console.log(numSquares(3))