function obtRhtAct(arr) {
   let [a,b,c] = arr.sort((a,b)=>a-b)
   if (!isTriangle(a,b,c)) return -1
   if (((c*c)/2)<a*a+b*b&&a*a+b*b<c*c) return 0
   if (a**2+b**2>c**2&&a**2+c**2>b**2&&c**2+b**2>a**2) return 2
   return 1;
}
function isTriangle(a,b,c)
{
   let max = Math.max(a, b, c);
   let sum = a + b + c;
   return sum - max > max;
}