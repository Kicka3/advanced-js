String.prototype.eachChar=function(cb){
   if (typeof cb === 'string'){
      return this.split('').map(v=>v+cb).join('')
   }
   return this.split('').map(v=>cb(v)).join('')
}