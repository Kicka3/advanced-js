const removeSmallest = numbers =>
  numbers.filter((_,index) => index != numbers.indexOf(Math.min(...numbers)))

