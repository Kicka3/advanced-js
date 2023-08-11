function boredom(staff){
  const arr=Object.values(staff).reduce((a,b)=>a+(obj[b]),0)
  return arr<=80? 'kill me now':arr>=100?'party time!!':  'i can handle this'
}

const obj={'accounts':1,
'finance' : 2 ,
'canteen' : 10, 
'regulation' : 3 ,
'trading' : 6 ,
'change' : 6,
'IS' : 8,
'retail' : 5,
'cleaning' : 4,
'pissing about' : 25,};