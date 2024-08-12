const gcd = (a, b) => b ? gcd(b, a % b) : Math.abs(a);
const lcm = (a, b) => Math.abs(a * b) / gcd(a, b);
function fraction(a, b) {
   return lcm(a,b)/a+lcm(a,b)/b
}