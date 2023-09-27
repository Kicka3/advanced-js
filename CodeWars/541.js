const findShort = s =>
   Math.min.apply(null, s.split(' ').map(element => element.length))
  