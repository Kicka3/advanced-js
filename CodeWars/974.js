function halfLife(quantityInitial, quantityRemaining, time) {
   return time/Math.log2(quantityInitial/quantityRemaining);
}