function asteriscIt(n) {
   if (Array.isArray(n)) return n.join('').split('').map((v,i,arr)=>v%2===0&&arr[i+1]%2===0?v+'*':v).join(``)
   return (''+n).split('').map((v,i,arr)=>v%2===0&&arr[i+1]%2===0?v+'*':v).join(``)
};