function neutralise(s1, s2) {
   let result = []
   let arr1 = s1.split('')
   let arr2 = s2.split('')

   for (let i = 0; i < arr1.length; i ++ ) {
      let srav = arr1[i] === arr2[i]

      if (srav === false) {
         result.push('0')
      } else {
         result.push(arr1[i])
      }
   }

   console.log(result.length)
   let solution = result.join('')
   console.log(solution)
   return solution;
}