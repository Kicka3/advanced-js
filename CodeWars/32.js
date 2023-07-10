function findAverage(array) {
  let sum = 0;
if (array.length === 0) return 0;
for (const num of array) {
  sum += num;
}
return sum / array.length;
}