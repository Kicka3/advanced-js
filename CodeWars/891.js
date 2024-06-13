function isThueMorse(seq) {
   let arr =[0];
   for (let i=0;arr.length<=seq.length;i++){
      arr.push(...arr.map(v=>v===1?0:1))
   }
   return arr.slice(0,seq.length).every((v,i)=>v===seq[i])
}