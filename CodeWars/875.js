function binarySwap(input) {
   if (input == 0) { return 1; }
   if (input == 1) { return 0; }

   if (typeof input === 'function') {
      return binarySwap(input());
   }

   if (Array.isArray(input)) {
      return input.map(item => {
         return binarySwap(item);
      });
   }
}