function peacefulYard(yd, d) {
  for(var pos=[],i=0;i<yd.length;i++)for(var j=0;j<yd[0].length;j++) if(yd[i][j]!="-") pos.push([i,j])
  return pos.every(x=>Math.min(...pos.map(y=>(Math.pow(x[0]-y[0],2)+Math.pow(x[1]-y[1],2))||d*d))>=d*d)
}