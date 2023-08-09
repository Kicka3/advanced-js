function maxSum(arr,range){
  let ans = []
  for (let i=0;i<range.length;i++){
    ans.push(arr.slice(range[i][0],range[i][1]+1).reduce((a,b)=>a+b,0))
  }
  return Math.max(...ans)
}