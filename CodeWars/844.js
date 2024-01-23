var Vector = function (components) {
   this.x = components;
};
Vector.prototype.add = function(b){
   var a = this.x
   b = b.x;
   if(a.length !== b.length) throw new TypeError("Vectors have different length");
   return new Vector(a.map(function(x,i){ return x + b[i]; }));
}
Vector.prototype.subtract = function(b){
   var a = this.x;
   b = b.x;
   if(a.length !== b.length) throw new TypeError("Vectors have different length");
   return new Vector(a.map(function(x,i){ return x - b[i]; }));
}
Vector.prototype.dot = function(b){
   var a = this.x;
   b = b.x;
   if(a.length !== b.length) throw new TypeError("Vectors have different length");
   return a.reduce(function(s,x,i){ return s + x * b[i]; },0);
}
Vector.prototype.equals = function(b){
   var a = this.x;
   b = b.x;
   if(a.length !== b.length) return false;
   return a.every(function(x,i){ return x === b[i]; });
}
Vector.prototype.norm = function(){
   var a = this.x;
   return Math.sqrt(a.reduce(function(s,x){ return s + x*x }, 0));
}
Vector.prototype.toString = function(){
   return '(' + this.x.join(',') + ')';
}