function firstNonRepeatingLetter(s) {
   return s[s.toLowerCase().split('').findIndex(letter => s.toLowerCase().split('').filter(l => l === letter).length === 1 )] || '';
}