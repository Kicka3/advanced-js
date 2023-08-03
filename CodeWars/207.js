function getSocks(name, socks) {
  const set=[...new Set(socks)];
  if (name==='Punky') return set.length>1?[set[0],set[1]]:[];
  if (name==='Henry'){
  let sock = socks.filter(s => socks.filter(n => n === s).length > 1)[0];
     if (!sock) return [];
     return [sock, sock];
  };
 }