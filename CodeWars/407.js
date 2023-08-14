function dropCap(n) {
    return n.split(' ').map(v=>v.length>2?v[0].toUpperCase()+v.slice(1).toLowerCase():v)
    .join(' ')
  }