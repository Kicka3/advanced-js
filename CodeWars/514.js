function zipWith(fn,a0,a1) {
   let arr = [];
   const short = Math.min(a0.length, a1.length);
   for (let i=0;i<short;i++){
      arr.push(fn(a0[i],a1[i]))
   }
   return arr
}var locate = function(arr,value){
   let arr2=[]
   function flatten(arr){
      return arr.map((a)=>Array.isArray(a)?flatten(a):arr2.push(a.toString()))
   }
   flatten(arr)
   return arr2.some(v=>v===value.toString())
}