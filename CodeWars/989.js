function roundAndRound(n, a, b) {

   let endDoor = (a + b) % n;

   if (endDoor < 1) endDoor += n;

   return endDoor;
}