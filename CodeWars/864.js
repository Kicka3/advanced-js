function buildPyramidTime(strength, skill) {
   let years=strength+skill
   if (years>15) return "receive 3000 gold coins"
   if (years>=10) return "receive 5000 gold coins"
   return "receive 10000 gold coins"
}