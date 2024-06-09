function tiyFizzBuzz(sentence){
   return sentence.split``.map(v=>{
      if (/[\W]/.test(v)) return v
      if (/[^AEIUO \d]/.test(v)&&v===v.toUpperCase()) return "Iron"
      if (/[AEIUO]/.test(v)) return "Iron Yard"
      if (/[aeiou]/.test(v)) return "Yard"
      return v
   }).join``
}