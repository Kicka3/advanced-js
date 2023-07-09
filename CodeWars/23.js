
const longest = (s1, s2) => [...new Set(s1 + s2)].sort().join('');

function grow(x){
   let result = x.reduce((prev,curr) => prev * curr)
     return result;
 }