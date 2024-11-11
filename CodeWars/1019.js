function correctness(bobsDecisions, expertDecisions) {
   let count = 0;
   bobsDecisions.map((v,i)=>v===expertDecisions[i]?count++:(v!==expertDecisions[i]&&(v==='?'||expertDecisions[i]==='?'))?count+=0.5:v)
   return count
}