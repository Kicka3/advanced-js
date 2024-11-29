function meanVsMedian(numbers) {
   numbers=numbers.sort((a,b)=>a-b)
   let mean = numbers.reduce((a,b)=>a+b,0)/numbers.length
   let median = numbers.slice(Math.floor(numbers.length/2),Math.ceil(numbers.length/2)).reduce((a,b)=>a+b,0)/numbers.slice(Math.floor(numbers.length/2),Math.ceil(numbers.length/2)).length
   if (mean===median) return 'same'
   if (mean>=median) return 'mean'
   return 'median'
}