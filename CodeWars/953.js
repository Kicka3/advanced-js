function sort(initialArray, sortingArray) {
   let arr = [];
   for(let i = 0; i < initialArray.length; i++)
      arr[sortingArray[i]] = initialArray[i];
   return arr;
}