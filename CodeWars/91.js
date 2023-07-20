function SeriesSum(n){
  if (!n) return '0.00'
  let sum = 1, j = 4;
  for (let i = 1; i < n; i++) {
    sum += 1 / j
    j += 3;
  }
  return sum.toFixed(2);
}