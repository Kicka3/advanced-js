function globalEstimate( estimates ){
   let max=[];
   let min=[];
   estimates.map(v=>max.push(v[v.length-1]))
   estimates.map(v=>min.push(v[0]))
   min=min.reduce((a,b)=>a+b,0)
   max=max.reduce((a,b)=>a+b,0)
   return [min,(max+min)/2,max]
}