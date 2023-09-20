function findNb(m) {
   let n = parseInt(Math.sqrt(2 * (Math.sqrt(m)))) - 1;
   while ( ((n * (n+1))/2) ** 2 < m ) {
      n++;
   }
   return ((n * (n+1))/2) ** 2 > m ? -1 : n;
}