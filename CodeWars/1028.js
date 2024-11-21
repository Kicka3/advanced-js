function isBalanced (string) {
   string=string.replace(/[^\(\)]/g,'')
   while (/\(\)/.test(string)){
      string=string.replace(/\(\)/,'')
   }
   return !string
}