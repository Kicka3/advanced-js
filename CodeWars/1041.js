function sc(watermelon){
   let seeds=0;
   let tempSeeds=0;
   for (let i=0;i<4;i++){
      for (let j=0;j<4;j++){
         if (watermelon[i][j]===1) tempSeeds++
      }
   }
   if (tempSeeds>5) seeds+=tempSeeds
   tempSeeds=0
   for (let i=4;i<8;i++){
      for (let j=0;j<4;j++){
         if (watermelon[i][j]===1) tempSeeds++
      }
   }
   if (tempSeeds>5) seeds+=tempSeeds
   tempSeeds=0
   for (let i=0;i<4;i++){
      for (let j=4;j<8;j++){
         if (watermelon[i][j]===1) tempSeeds++
      }
   }
   if (tempSeeds>5) seeds+=tempSeeds
   tempSeeds=0
   for (let i=4;i<8;i++){
      for (let j=4;j<8;j++){
         if (watermelon[i][j]===1) tempSeeds++
      }
   }
   if (tempSeeds>5) seeds+=tempSeeds
   tempSeeds=0
   return seeds
}