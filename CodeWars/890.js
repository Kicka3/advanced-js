function canReach(n, add, mult) {
   if (mult === 1) return (n-1) % add === 0;
   for (let i = 1; i <= n; i *= mult)
      if ((n - i) % add === 0) return true;
   return false;
}