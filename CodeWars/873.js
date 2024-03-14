function multiply(number){
   let length = 0;
   if (number > 0) {
      length = number.toString().length
   } else {
      let plus = number * -1
      length = length.toString().length
   }
   return number * 5 ** length
}

multiply(-2)