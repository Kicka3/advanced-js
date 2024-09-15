function averageLength(arr) {
   let avg= Math.round(arr.reduce((a,b)=>a+b.length,0)/arr.length)
   return arr.map(v=>v.length===avg?v:v[0].repeat(avg))
}