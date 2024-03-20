function multiply(number){
   console.log(number * Math.pow(5, Math.abs(number).toString().length))
   return number * Math.pow(5, Math.abs(number).toString().length)
}

multiply(-2);