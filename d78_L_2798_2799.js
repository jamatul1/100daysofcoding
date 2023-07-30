function partition(start, end) {
  const pivot = fn(arr[end]);
  let i = start - 1;
  for (let j = start; j <= end - 1; j++) {
    if (fn(arr[j]) <= pivot) {
      swap(++i, j);
    }
  }
  swap(++i, end);
  return i;
}
function swap(i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}
function quick_sort(start, end) {
  if (start < end) {
    let pi = partition(start, end);
    quick_sort(start, pi - 1);
    quick_sort(pi + 1, end);
  }
}

quick_sort(0, arr.length - 1);
return arr;
