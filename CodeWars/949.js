function chains(down, distance, yardsGained) {
   if (yardsGained >= distance) return 'First down';
   if (down === 4) return 'Turnover on downs';
   return `${['2nd','3rd','4th'][down - 1]} and ${distance-yardsGained}`;
}