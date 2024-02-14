function findNeededGuards(k) {
   let guard=0
   for(let i=0;i<k.length-1;i++){
      if (k[i]!==true&&k[i+1]!==true){
         k[i]=true
         k[i+1]=true
         i++
         guard++
      }
   }
   return guard
}