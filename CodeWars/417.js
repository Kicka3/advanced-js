function generateHashtag (str) {
  let arr=str.split(' ').map(v=>v.slice(0,1).toUpperCase()+v.slice(1)).join('')
  if (arr.length>139||arr==='') return false
  return '#'+arr
}