function anagramDifference(str1,str2){
   let count1 = Array(26).fill(0)
   let count2 = Array(26).fill(0)
   let i = 0
   while (i < str1.length){
      count1[str1[i].charCodeAt()-97] += 1
      i += 1
   }
   i =0
   while (i < str2.length){
      count2[str2[i].charCodeAt()-97] += 1
      i += 1
   }
   let result = 0
   for (let i = 0; i<26;i++){
      result += Math.abs(count1[i] - count2[i])
   }
   return result
}