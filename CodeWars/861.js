function race(speed1,speed2,distance,sleep,getup){
   let fallAsleepTime=sleep/speed1;
   let getUpTime=(distance-getup)/speed2;
   let totalSleepTime=getUpTime-fallAsleepTime;
   let tortoiseRanTime= distance/speed2;
   let hareRanTime= (distance/speed1) + totalSleepTime;
   if(tortoiseRanTime>hareRanTime)
   {
      return "The hare won the race. He is sleeping for "+ Math.round(totalSleepTime) + " minutes.";
   }
   if(hareRanTime>tortoiseRanTime)
   {
      return "The tortoise won the race. The hare is sleeping for "+ Math.round(totalSleepTime) + " minutes.";
   }
   return "The hare and the tortoise tied. The hare is sleeping for "+ Math.round(totalSleepTime) + " minutes.";

}