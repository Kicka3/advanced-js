bind = function(list, func) {
   if (typeof func(list[0]) !== "object") {throw Error()}
   return list.reduce((a,b)=>a.concat(func(b)),[])
}