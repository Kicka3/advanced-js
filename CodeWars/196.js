function thirt(n) {
  const dict=[1, 10, 9, 12, 3, 4]
  let sum=n;
  while(1){
      let temp=sum
      sum=sum.toString().split``.reverse().join``.split``.map((v,i)=>{
        v=v*dict[i%6]
        return v
      }).reduce((a,b)=>a+b,0)
      if (sum===temp){break}
    }
  return sum
}