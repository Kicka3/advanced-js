function battle(x, y) {
   const getPower = (z) => {
      let power = 0;
      for (let i= 0; i < z.length; i++){
         const charCode = z.charCodeAt(i) - 64;
         power += charCode;
      }
      return power;
   }
   const power1 = getPower(x);
   const power2 = getPower(y);

   if (power1 > power2) {
      return x;
   } else if (power2 > power1){
      return y
   } else {
      return "Tie!"
   }
}

console.log(battle("ONE", "TWO"))

// let obj = {
//    1: 'A',
//    2: 'B',
//    3: 'C',
//    4: 'D',
//    5: 'E',
//    6: 'F',
//    7: 'G',
//    8: 'H',
//    9: 'I',
//    10: 'J',
//    11: 'K',
//    12: 'L',
//    13: 'M',
//    14: 'N',
//    15: 'O',
//    16: 'P',
//    17: 'Q',
//    18: 'R',
//    19: 'S',
//    20: 'T',
//    21: 'U',
//    22: 'V',
//    23: 'W',
//    24: 'X',
//    25: 'Y',
//    26: 'Z'
// }