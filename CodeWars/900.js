function axisAlignedBoundingBox(x, y) {
   let a = Math.max(...x)- Math.min(...x)
   let b = Math.max(...y)- Math.min(...y)
   return a*b
}