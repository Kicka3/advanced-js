function lastManStanding(last_number) {
   var arr = [];
   for (let i = 0; i < last_number; i++)  arr.push(i + 1);

   while (arr.length > 1) {
       let temp_arr = [];
       for (let i = 1; i < arr.length; i += 2) {
           temp_arr.push(arr[i]);
       }
       arr = temp_arr.reverse();
   }
   return arr[0];
}