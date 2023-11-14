
function betterThanAverage(classPoints, yourPoints) {
   let sum = 0;
   for (let i = 0; i < classPoints.length; i++){
      sum += classPoints[i];
   }

   let classAvg = sum / classPoints.length;
   return yourPoints > classAvg;
}


function betterThanAverage(classPoints, yourPoints) {
   return yourPoints > classPoints.reduce((acc, curr) =>
      acc + curr) / classPoints.length;
}
