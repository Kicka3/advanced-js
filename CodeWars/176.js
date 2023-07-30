function leng(arr) {
  let words = str.split(' ');
  for (let i= 0; i < words.length; i++) {
    words[i] = words[i].replace(/\w$/g, x => x.toUpperCase())
      console.log(words)
    
  }
  return words.join(' ')
}
leng(str)


function leng(arr) {
  let words = str.split(' ');
  for (let i= 0; i < words.length; i++) {
     words[i] = words[i].replace(words[i].at(-1), words[i].at(-1).toUpperCase())
      console.log(words)
  }
  return words.join(' ')
}


function alienLanguage(str){
  let words = str.toUpperCase().split(' ')
   for (let i= 0; i < words.length; i++) {
     words[i] = words[i].replace(/\w$/g, x => x.toLowerCase())
   }
   return words.join(' ');
}