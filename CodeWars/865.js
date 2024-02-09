function coolString(s) {
   s=s.replace(/ /g,'')
   if (s.length<=1) return false
   for (let i=0;i<s.length-1;i++){
      if (s[i]===s[i].toLowerCase()&&(s[i+1]===s[i+1].toLowerCase())) return false
      if ((s[i]===s[i].toUpperCase())&&(s[i+1]===s[i+1].toUpperCase())) return false
   }
   return true
}