function findSummands(n){
  let check=n*n*n
  let c=n*n
  while (c%2==0){
    c--
  }
  let c1=c
  let arr=[c];
  for (let i=1;i<n;i+=2){
    arr.push(c+=2)
    arr.unshift(c1-=2)
  }
  return n%2==0?arr.slice(1):arr;
}