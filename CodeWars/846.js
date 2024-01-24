
Array.prototype.valueOf = function() {
   return this.length ? this.reduce((x, y) => x + y) : 0;
};