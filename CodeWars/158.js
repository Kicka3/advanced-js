function wordify(n){
  const words1 = {}
  const mult1 = {}
  for (let i in words){
    words1[words[i]]=i
  }
  if (words1[n]) return words1[n]
  let arr = [];
  let s = n.toString().split``.reverse()
  for (let i=0;i<s.length;i++){
    arr.push(s[i].padEnd(i+1,0))
  }
  if (words1[n.toString().slice(-2)]) return words1[s[s.length-1]]+' hundred '+words1[n.toString().slice(-2)]
  return arr.filter(v=>parseInt(v)).map(v=>words1[v]?words1[v]:words1[v[0]]+' hundred').reverse().join` `
}