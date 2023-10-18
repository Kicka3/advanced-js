const reduce = fraction => {
   const gcd = (numerator, denominator) => denominator ? gcd(denominator, numerator % denominator) : numerator;
   return fraction.map(val => val / gcd(...fraction))
};