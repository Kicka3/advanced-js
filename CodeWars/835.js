function listSquared(m, n) {
   let arr = []
   for (let i = m; i <= n; i++) {
      let temp = 0;
      for (let j = 1; j <= i; j++) {
         if (i % j == 0) {
            temp += j*j;
         }
      }
      if(Math.sqrt(temp) % 1 == 0) {
         arr.push([i, temp]);
      }
   }
   return arr;
}