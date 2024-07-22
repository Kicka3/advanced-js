function houseOfCats(legs) {
   const result = [];
   while(legs > 0) {
      result.unshift(legs / 2);
      legs -= 4;
   }
   return result[0]===2?[0,...result]:result;
}