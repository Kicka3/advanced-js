function grabscrab(anagram, dictionary) {
  anagram=anagram.split('').sort().join()
  let arr = dictionary.slice().map(v=>v.split('').sort().join()===anagram)
  return dictionary.filter((v,i)=>arr[i]===true)
}