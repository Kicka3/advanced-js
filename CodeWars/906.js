function union(s1, s2){
   let arr =[];
   s1.forEach(v=>arr.push(v))
   s2.forEach(v=>arr.push(v))
   arr=[...new Set(arr)]
   let set= new Set();
   arr.map(v=>set.add(v))
   return set
}