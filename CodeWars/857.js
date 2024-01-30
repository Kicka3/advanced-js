function countTheAnimals(animals) {
   let sum=0;
   for (let i in animals){
      sum+=parseInt(animals[i],2)
   }
   return sum
}