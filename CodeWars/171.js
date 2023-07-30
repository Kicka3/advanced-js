function calculateHypotenuse(a,b){
  if (typeof a !== 'number'||typeof b !== 'number') throw new Error('Not a Number')
  if (isNaN(a)||isNaN(b)) throw new Error('Not a Number')
  if (a<0||b<0) throw new Error('Less than 0')
  return Math.hypot(a,b).toFixed(3)
}