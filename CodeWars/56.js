function nbYear(p0, percent, aug, p) {
  let sum = 0;
  let count = 0;
while (sum < p) {
  sum = Math.floor(p0 +p0 * (percent / 100) + aug)
  p0 = sum;
  count ++;
}
return count;
}