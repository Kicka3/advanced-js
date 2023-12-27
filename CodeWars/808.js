var sum_pairs=function(ints, s){
   var seen = {}
   for (var i = 0; i < ints.length; ++i) {
      if (seen[s - ints[i]]) return [s - ints[i], ints[i]];
      seen[ints[i]] = true
   }
}