function factors(n) {
   let arrSQ=[];
   let arrCB=[];
   for (let i=2;i<n;i++){
      if (n%(i*i)===0) arrSQ.push(i)
      if (n%(i*i*i)===0) arrCB.push(i)
   }
   return [arrSQ,arrCB]
}