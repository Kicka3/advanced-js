function zipWith(fn,a0,a1) {
   let arr = [];
   const short = Math.min(a0.length, a1.length);
   for (let i=0;i<short;i++){
      arr.push(fn(a0[i],a1[i]))
   }
   return arr
}