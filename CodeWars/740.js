function countBy(x, n) {
   let z = [];
   for (let i = 1; i <= n; i++){
      z.push (x * i);
   }
   return z;
}

const binaryArrayToNumber = arr => parseInt(arr.join(''),2);