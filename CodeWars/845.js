function primes(start, end){
   const arr = [];
   for (let i=start;i<=end;i++){
      if (isPrime(i)) arr.push(i)
   }
   return arr.length>0?arr:null
}

function isPrime(n) {
   let rt = Math.sqrt(n);
   for(let i = 2; i <= rt; i++) {
      if(n % i === 0) return false;
   }
   return n !== 1;
}