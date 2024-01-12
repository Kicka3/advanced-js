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
