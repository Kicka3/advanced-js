var solution = (str) => {
   let part1=str.split`?`[1]
   let part2=part1.split`&`
   let obj={};
   part2.map(v=>{
      v=v.split`=`;
      return obj[v[0]]=v[1]})
   return obj
}