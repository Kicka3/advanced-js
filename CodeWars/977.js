function _forEach(array, fn) {
   if (!Array.isArray(array)||array.length===0) return undefined
   return array.map((v,i,arr)=>fn(v,i,arr))
}