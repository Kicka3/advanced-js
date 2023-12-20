
function rot13(str) {
   let s1 = 'abcdefghijklmnopqrstuvwxyz'
   let s2 = 'NOPQRSTUVWXYZABCDEFGHIJKLM'.toLowerCase()
   const replaced = str.replace(/[a-z]/gi,v=>{
      let upper = v===v.toUpperCase()
      return upper?s2[s1.indexOf(v.toLowerCase())].toUpperCase():s2[s1.indexOf(v.toLowerCase())].toLowerCase()
   })
   return replaced
}