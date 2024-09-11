function smallestProduct(arr) {
   return Math.min(...arr.map(v=>v.reduce((a,b)=>a*b,1)))
}