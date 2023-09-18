const past = (h,m,s) => 1000 * (3600 * h + 60 * m + s);


function pipeFix(numbers){
   let result = [];
   for (let i = numbers[0]; i <= numbers[numbers.length - 1]; i++) {
      result.push(i)
      console.log(result)
   }
   return result;
}