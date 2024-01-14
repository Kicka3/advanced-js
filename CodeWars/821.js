add(1); // 1
// We should be able to store the returned values and reuse them.

// var addTwo = add(2);
// addTwo; // 2
// addTwo + 5; // 7
// addTwo(3); // 5
// addTwo(3)(5); // 10
//


var add = function(n) {
   const f = x => add(n + x)
   f.valueOf = () => n
   return f;
}