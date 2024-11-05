let strain = {
   keep(array, fn){
      return array.filter(v=>fn(v))
   },
   discard(array, fn){
      return array.filter(v=>!fn(v))
   }
}