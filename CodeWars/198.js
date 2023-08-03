function towerCombination(n){
   return n === 1 ? 1 : n * towerCombination(n - 1);
 }