function save(sizes, hd) {
   for (var i=0;i<sizes.length;i++){
      if (sizes.slice(0,1+i).reduce((a,b)=>a+b,0)>hd) return i
   }
   return i
}