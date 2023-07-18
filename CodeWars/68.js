function positiveSum(arr) {
   console.log(arr)
  
    let counter = 0;
   for (let i = 0; i < arr.length; i++){
     if (arr[i] > 0){
         counter += arr[i]
         console.log(counter)
     } 
   }
   return counter;
   
 }