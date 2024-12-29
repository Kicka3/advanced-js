function climbingTime(height, up, down) {
   if (up <= 0 || down < 0 || height <= 0) return false
   for (var i=up,j=0;;i+=up-down,j++){
      if (i>=height) return j+1
   }
}