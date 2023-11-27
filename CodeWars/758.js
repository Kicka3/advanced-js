
function countBy(x, n) {
   let z = [];
   let raz = n;
   for (let i = x; raz > 0; i +=x) {
      z.push(i)
      raz--;
   }
   return z;
}