const fortune = (f0, p, c0, n, i) => {
   let c = c0;
   let sum = f0;

   for (let j = 1; j < n; j++) {
      sum = Math.ceil(sum * (1 + p / 100) - c);
      c = Math.ceil(c * (1 + i / 100))
   }

   return sum >= 0;
};