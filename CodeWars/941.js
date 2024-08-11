function decode(str) {
   const dict = 'abcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcba'
   return [...str].map(v=>{
      const index = dict.indexOf(v)+26;
      if (v===v.toLowerCase()&&index-26!==-1) return dict[index]
      return v
   }).join``
}