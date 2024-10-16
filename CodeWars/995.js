function getAverages (pickleCounts) {
   let f=[]
   let s=[];
   let t=[];
   let fo=[];
   let l=pickleCounts.length/4
   for (let i=0;i<l;i++){
      f.push(pickleCounts.shift()||0)
      s.push(pickleCounts.shift()||0)
      t.push(pickleCounts.shift()||0)
      fo.push(pickleCounts.shift()||0)
   }
   return [f,s,t,fo].map(v=>v.reduce((a,b)=>a+b,0)/v.length)
}