function multImplication(arr) {
   return (arr.length) ? arr.reduce( (a,b) => !a || b, true) : null;
}