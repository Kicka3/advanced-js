function translateDate(dateStr){
   dateStr=dateStr.split('-').join``
   let arr= []
   for (let i=0;i<dateStr.length;i+=2){
      arr.push(dateStr.slice(i,i+2)*1)
   }
   arr=arr.map(v=>String.fromCharCode(v+50))
   return [arr[0]+arr[1],arr[2],arr[3]].join`-`
}