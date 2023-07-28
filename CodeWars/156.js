Function.prototype.call = function(context, ...args) {
  return this.apply(context, args);
}