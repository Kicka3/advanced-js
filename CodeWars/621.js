function distinct(a) {
   const newSet = [...new Set(a)]
   console.log(newSet)
}


distinct([1,2,2,6,8,2]);
distinct([1]);
distinct([1,1,2,1,2,3,4,2]);

// let chars = ['A', 'B', 'A', 'C', 'B'];
// let dupChars = chars.filter((element, index) => {
//     return chars.indexOf(element) !== index;
// });
// console.log(dupChars);

function include(arr, item){

   return arr.includes(item)

}