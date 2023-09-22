
Array.prototype.reduce = function(process, initial) {
   for (let i = 0; i < this.length; i++) {
      if (!initial){i++;initial=this[0]}
      initial =  process(initial, this[i]);
   }
   return initial
}