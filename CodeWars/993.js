function passTheBill(n, m, k) {
   if (k >= n / 2) {
      return -1;
   }
   return  m > n / 2 ? 0 : Math.floor(n / 2) + 1 - m;
}