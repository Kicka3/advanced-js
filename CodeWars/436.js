function oddOrEven(array) {
   //enter code here
   if(array.length == 0) {
      return "even";
   } else {
      let a = array.reduce((acc,n) => {return acc + n})
      return (a % 2 == 0) ? "even" : "odd"
   }
}