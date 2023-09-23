
const plural = n => n !== 1;

function problem(x){
   if (typeof(x) == "string"){
      return "Error";
   } else {
      return x * 50 + 6;
   }
}
