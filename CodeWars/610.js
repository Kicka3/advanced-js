function takeUmbrella(weather, chance) {
   if (weather=='sunny' && chance<=0.5) return false;
   if (weather=='rainy') return true;
   if (weather=='cloudy'&& chance<=0.2) return false
   return true
}