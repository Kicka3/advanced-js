function hopAcross(lst) {
   let jump=0;
   for (let i=0;i<lst.length;){
      jump++
      i+=lst[i]
   }
   let rev=lst.reverse()
   for (let i=0;i<lst.length;){
      jump++
      i+=rev[i]
   }
   return jump
}