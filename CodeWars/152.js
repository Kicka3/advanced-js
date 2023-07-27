function howManySmaller(arr,n){

  total = 0;
  
  for (i = 0; i < arr.length; i++){
    
    if (arr[i].toFixed(2) < n)
    
      total++;
      
  }
  
  return total;
  
}