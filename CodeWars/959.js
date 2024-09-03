function sortVowels(s){
   if (typeof s !== 'string') return ''
   return s.split``.map(v=>{
      if (/[aeiou]/i.test(v)) return '|'+v+'\n'
      else return v+'|'+'\n'
   }).join``.slice(0,-1)
}