function getAge(inputString){
 
   let Regex = /^\d/;
   let number = inputString.match(Regex).join('');
       console.log(number);
       console.log(Array.isArray(number));

   return Number(number);
}