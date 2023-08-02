function toInteger(n) {
    if (isNaN(n)) return 0
    n=Math.trunc(n)
    if (!Number.isFinite(n)) return 0
    return n  
  }