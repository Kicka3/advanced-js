

const stringToNumber = function(str){
   // put your code here
   const numb = parseInt(str)
   return numb;
 }
 const stringToNumber1 = function(str){
   let a = Number(str);
   return a;
 }
 
 function XO(str) {
   let xCount = 0;
   str.split``.forEach(c => {
     ('x' === c.toLowerCase()) && xCount++;
     ('o' === c.toLowerCase()) && xCount--;
   });
     return xCount === 0;
   
 }