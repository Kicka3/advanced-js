
function tribonacci(signature,n){
  let arr=[...signature];
  for (let i=0;i<n;i++){
  arr.push(arr.slice(i,i+3).reduce((acc,next)=>acc+next,0))
  }
  
  return arr.slice(0,-3)
}

