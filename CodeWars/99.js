let pop = 0; let count;
let mult, nums;
   
function mul(num){
  mult = 1;
  while(num > 0){
      pop = num%10;
      num = (num-pop)/10;
      mult *= pop;
   }
  nums = mult;
}

function persistence(num) {
   if(num < 10) return 0;
   count = 0;
   nums = num;
   do{
     count++;
     mul(nums);
   }while(mult >= 10)
   
   return count;
}