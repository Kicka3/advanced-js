function cogRpm(c, n) {
   let d = [1,-1];
   return [ d[n % 2] * c[n] / c[0], d[(c.length - n + 1) % 2] * c[n] / c[c.length-1] ];
}