var createIterator = function (func, n) {
   return function(v) {
      for(var i = 0; i < n; i++) v = func(v);
      return v;
   };
};