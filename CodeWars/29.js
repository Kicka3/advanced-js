function getSum(a, b) {
   let min = Math.min(a,b),
        max = Math.max(a,b)
   return (max - min + 1) * (max + min) / 2;
}


function rentalCarCost(d) {
   let total = d * 40;
   if (d >= 7) {
     return total - 50;
   } else if (d >= 3){
     return total - 20;
   } else {
     return total;
   }
 }