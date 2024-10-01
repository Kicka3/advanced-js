function sample(coin) {
   let head = 0;
   for (let i = 0; i < 8000; i++) {
      if (coin()) { head++; }
   }
   return head / 8000;
}