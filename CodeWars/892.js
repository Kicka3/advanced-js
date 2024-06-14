function pidgeyCalc ( pidgeys, candy ) {
   let XP = 0;
   while ( pidgeys > 0 ) {
      if (candy > 11) {
         pidgeys-=1;
         candy -= 11;
         XP+=500;
      } else {
         pidgeys--;
         candy++;
      };
   };
   return XP;
}