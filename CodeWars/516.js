function pendulum(values, l = values.length) {
   values.sort((min, max)=> max-min)
   const arr = [];
   for (let i=0; i < l; i++){
      if (i % 2 === 0){
         arr.unshift(values.pop())
      }else{
         arr.push(values.pop())
      }
   }
   return arr
}