
function ride(group,comet){
  let g= group.split``.reduce((a,b)=>a*(b.charCodeAt()-64),1)%47
  let c= comet.split``.reduce((a,b)=>a*(b.charCodeAt()-64),1)%47
  return g===c?'GO':'STAY'
}