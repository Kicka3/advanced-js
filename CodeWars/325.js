const maxAndMin = (array1, array2) => [
  Math.max(...array1.map(x => Math.max(...array2.map(y => Math.abs(x - y))))),
  Math.min(...array1.map(x => Math.min(...array2.map(y => Math.abs(x - y)))))
];