function game(nobi){
   let tie=nobi.filter(v=>v==='()').length
   let f=nobi.filter(v=>v==='8<').length*2+tie
   let s=nobi.filter(v=>v==='[]').length*2+tie
   return [s,f]
}