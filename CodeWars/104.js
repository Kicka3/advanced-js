function sortArray(array) {
  let oddSort = array.filter(e => e % 2).sort((a,b) => a - b)
  return array.map(e => e % 2 ? oddSort.shift() : e)
}