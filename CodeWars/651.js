function comp(array1, array2){
   let result = false;

   if ( array1 && array2 ) {
      if (array1.length === 0 && array2.length === 0){
         result = true;
      } else {
         const squareRoots = array2.map(num => Math.sqrt(num));
         for (let i=0; i<squareRoots.length; i++) {
            if (array1.indexOf(squareRoots[i])
               !== array1.indexOf(array1[i])) {
               result = false;
               break;
            }
            result = true;
         }
      }
   }
   return result;
}