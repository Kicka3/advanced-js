
var humanYearsCatYearsDogYears = function(humanYears) {
   if (humanYears == 1) return [1,15,15];
   if (humanYears == 2) return [1,24,24];
   return [
      humanYears,
      24 + (humanYears - 2) * 4,
      24 + (humanYears - 2) * 5
   ];
}



function powersOfTwo(n){
   let arr = [];
   for(let i=0; i<=n; i++)
      arr[i] = 2**i;
   return arr;
}