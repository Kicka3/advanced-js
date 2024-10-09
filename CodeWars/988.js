const transform = (s) => {
   return [...new Set([...s].map(v=>v+([...s].filter(x=>x===v).length>1?[...s].filter(x=>x===v).length:'')))].join``
}