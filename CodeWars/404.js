function owlPic(text){
   const dict=['8','W','T','Y','U','I','O','A','H','X','V','M']
   const left=text.toUpperCase().split('').filter(v=>dict.includes(v)).join('')
   const right=left.split('').reverse().join('')
   return left+`''0v0''`+right
 }