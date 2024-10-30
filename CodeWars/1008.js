function candles(candlesNumber, makeNew) {
   let leftovers = 0;
   let candlesBurned = 0;
   if(candlesNumber === 0) return 0;
   if(makeNew > candlesNumber) return candlesNumber;
   let i = 0;
   while(i < candlesNumber) {
      leftovers++;
      candlesBurned++;
      i++;
      if(leftovers == makeNew) {
         leftovers -= makeNew;
         i--;
      };
   };
   return candlesBurned;
};