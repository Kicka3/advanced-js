function whoseBicycle(diary1, diary2, diary3) {
   let arr = [Object.values(diary1),Object.values(diary2),Object.values(diary3)].map(v=>v.reduce((a,b)=>a+b,0))
   let index= arr.lastIndexOf(Math.max(...arr))
   return `I need to buy a bicycle for my ${index===0?'first':index===1?'second':'third'} son.`
}