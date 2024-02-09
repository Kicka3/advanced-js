function increasingNumber(x, n) {
   for (let i=1;i<=n;i++){
      while (x%i!==0){
         x++
      }
   }
   return x
}