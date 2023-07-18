/** -------------- 1442. Count Triplets That Can Form Two Arrays of Equal XOR ------------- */
var countTriplets = function (arr) {
  let count = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    let leftXor = 0;
    for (let j = i + 1; j < arr.length; j++) {
      let rightXor = 0;
      leftXor ^= arr[j - 1];
      for (let k = j; k < arr.length; k++) {
        rightXor ^= arr[k];
        if (rightXor === leftXor) count++;
      }
    }
  }
  return count;
};

console.log(countTriplets([2, 3, 1, 6, 7]));
