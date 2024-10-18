function strangeCode(s, e) {
   let str = '';
   let ab = true
   while (s<e-1){
      s++
      e--
      if (ab){
         str+='a'
         ab=false
      } else {
         str+='b'
         ab=true
      }
   }
   return str
}