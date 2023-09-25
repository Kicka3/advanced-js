function findMultiples(integer, limit) {
   const a = [];
   let increment = 1;
   while (increment * integer <= limit) {
      a.push(increment * integer);
      increment++
   }
   return a;
}
