function arrayPreviousLess(arr) {
   let arr1 =[]
   for (let i=0;i<arr.length;i++){
      if (Math.min(...arr.slice(0,i))<arr[i]){
         for (let j=i;j=>0;j--){
            if (arr[j]<arr[i]) {
               arr1.push(arr[j])
               break
            }}}
      else {arr1.push(-1)}
   }
   return arr1
}