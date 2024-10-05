function splitExp(n) {
   let str=n.split('.')
   let arr1 = [];
   let arr2 = [];
   for (let i=0;i<str[0].length;i++){
      arr1.push(str[0].slice(i,i+1)+'0'.repeat(str[0].length-1-i))
   }
   arr1=arr1.filter(v=>v*1!==0)
   if (str[1]){
      for (let i=0;i<str[1].length;i++){
         arr2.push('.'+'0'.repeat(i)+str[1].slice(i,i+1))
      }
      arr2=arr2.filter(v=>v*1!==0)
      return arr1.concat(arr2)
   }
   return arr1
}