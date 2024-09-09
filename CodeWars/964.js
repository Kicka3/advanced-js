function generatePairs(m, n) {
   let arr = [];
   for (let i=m;i<=n;i++){
      for (let j=i;j<=n;j++){
         arr.push([i,j])
      }
   }
   return arr
}