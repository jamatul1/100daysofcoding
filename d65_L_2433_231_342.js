/** ----------------------2433. Find The Original Array of Prefix Xor--------------------- */
var findArray = function (pref) {
  let res = [pref[0]];
  for (let i = 1; i < pref.length; i++) {
    res.push(pref[i - 1] ^ pref[i]);
  }
  return res;
};

/**      ------------------ 231. Power of Two --------------------------- */
var isPowerOfTwo = function (n) {
  if (n <= 0) return false;
  return !(n & (n - 1));
};

/**      ------------------ 342. Power of Four--------------------------- */
var isPowerOfFour = function (n) {
  return !(n & (n - 1)) && n % 3 === 1;
};
