function sortLetters(a) {
   let arr=[].concat(...a).filter(v=>typeof v === 'string').join`/`.toUpperCase().split`/`
   return [arr.filter(v=>/[AEUIO]/.test(v)),arr.filter(v=>/[^AEUIO]/.test(v))]
}