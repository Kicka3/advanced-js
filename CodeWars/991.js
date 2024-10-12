function add3bits(x, y, z) {
   if (x===0&&y===0&&z===0) return [0, 0]
   if (x===0&&y===0&&z===1) return [0, 1]
   if (x===0&&y===1&&z===0) return [0, 1]
   if (x===0&&y===1&&z===1) return [1, 0]
   if (x===1&&y===0&&z===0) return [0, 1]
   if (x===1&&y===0&&z===1) return [1, 0]
   if (x===1&&y===1&&z===0) return [1, 0]
   if (x===1&&y===1&&z===1) return [1, 1]
   return null
}