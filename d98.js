/**----------2627. Debounce----------- */
const debounce = (fn, t) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn.apply(this, args);
    }, t);
  };
};

/**----------2623. Memoize---------- */
function memoize(fn) {
  const cache = {};
  return function (...args) {
    const inputs = JSON.stringify(args);
    if (inputs in cache) {
      return cache[inputs];
    }
    const result = fn.apply(this, args);
    cache[inputs] = result;
    return result;
  };
}
