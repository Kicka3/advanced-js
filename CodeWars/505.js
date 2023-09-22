function lowercaseCount(str){
   let lower = str.match(/[a-z]/g);
   if(lower === null) {
      console.log(0)
      return 0;
   } else {
      console.log(lower.length)
      return lower.length;
   }
}