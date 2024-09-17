function maxPossibleScore(obj, arr) {
   arr=arr.map(String)
   let count=0
   for (let key in obj){
      if (arr.includes(key.toString())){
         obj[key]*=2}
      count+=obj[key]
   }
   return count
}