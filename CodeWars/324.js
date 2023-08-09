function triangleType(a, b, c){
  const max = Math.max(a,b,c);
  
  if (a+b+c <= 2*max) return 0;
  if (2*max*max == a*a+b*b+c*c) return 2;
  if (2*max*max >  a*a+b*b+c*c) return 3;
  return 1;
}