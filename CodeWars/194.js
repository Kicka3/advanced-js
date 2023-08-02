function isAlt(word) {
 
  return word.split('').every((v,i)=>{
  if (/[aeiou]/.test(word[0])){
    if (i%2===0&&/[aeiou]/.test(v)){
      return true
      } else if (i%2!==0&&!/[aeiou]/.test(v)){ return true
      } else {return false}
    }
  if (!/[aeiou]/.test(word[0])){
    if (i%2==0&&!/[aeiou]/.test(v)){
      return true
      } else if (i%2!==0&&/[aeiou]/.test(v)){ return true
      } else {return false}
    }
  })
}