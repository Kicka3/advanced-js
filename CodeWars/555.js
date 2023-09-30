const stray = (numbers, sort = numbers.sort()) =>
   sort[0] == sort[1] ? sort[sort.length - 1] : sort[0];
  
