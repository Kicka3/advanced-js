let a = 8, b = 6;
// Only change code below this line

[a,b] = [b,a];


function removeFirstTwo(list) {
   // Only change code below this line
   const [a, b, ...shorterList] = list; // Change this line
   // Only change code above this line
   return shorterList;
 }
 
 const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 const sourceWithoutFirstTwo = removeFirstTwo(source);