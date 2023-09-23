function comp(array1, array2){
   array1=array1.map(v=>v*v)
   return array2?array1.reduce((a,b)=>a+b,0)===array2.reduce((a,b)=>a+b,0):false
}