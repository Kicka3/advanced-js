function isFibo(a,b,f) {
   let arr =[a,b];
   for (let i=1;i<f+10;i++)
   {
      arr.push(arr[i-1]+arr[i])
   }
   return arr.includes(f)
}