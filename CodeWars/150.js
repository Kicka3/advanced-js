function whatNumberIsIt(n){
  if (n == Number.POSITIVE_INFINITY) {
    return "Input number is Number.POSITIVE_INFINITY";
  } else if (n == Number.NEGATIVE_INFINITY) {
    return "Input number is Number.NEGATIVE_INFINITY";
  } else if (n == Number.MIN_VALUE) {
    return "Input number is Number.MIN_VALUE";
  } else if (n == Number.MAX_VALUE) {
    return "Input number is Number.MAX_VALUE";
  } else if (n == Number.isNaN(n)) {
    return "Input number is Number.NaN";
  } 
}




// "Input number is Number.MAX_VALUE"
// "Input number is Number.MIN_VALUE"
// "Input number is Number.NaN"
// "Input number is Number.NEGATIVE_INFINITY"
// "Input number is Number.POSITIVE_INFINITY"


const  whatNumberIsIt = n => `Input number is ${
  n == Number.POSITIVE_INFINITY ? 'Number.POSITIVE_INFINITY' :
  n == Number.NEGATIVE_INFINITY ? 'Number.NEGATIVE_INFINITY' :
  n == Number.MAX_VALUE ? 'Number.MAX_VALUE' :
  n == Number.MIN_VALUE ? 'Number.MIN_VALUE' :
  Number.isNaN(n) ? 'Number.NaN' :
n}`

