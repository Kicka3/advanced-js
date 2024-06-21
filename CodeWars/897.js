function* baumSweet() {
   yield 1;
   for(var i=1;; i++)
      yield i.toString(2).split(/1/g).some(v=>v.length%2)?0:1;
}