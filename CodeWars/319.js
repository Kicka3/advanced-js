function meeting(x, need){
  let arr = [];
  x.map(v=>arr.push(v[1]-v[0].length>=0?v[1]-v[0].length:0))
  for (let i=0;i<=arr.length;i++){
  if (arr.slice(0,i).reduce((a,b)=>a+b,0)>=need){arr=arr.slice(0,i);break}
  }
  while(arr.reduce((a,b)=>a+b,0)>need){
    arr[arr.length-1]--
  }
  if (need===0) return 'Game On'
  if (arr.reduce((a,b)=>a+b,0)<need) return 'Not enough!'
  return arr
}