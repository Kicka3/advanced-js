function speedListen(audioLength, playSpeed) {
   let h=audioLength.split(':')[0]*1
   let m=audioLength.split(':')[1]*1
   let s=audioLength.split(':')[2]*1
   let time=(h*60*60+m*60+s)/playSpeed
   let newH=0,newM=0,newS=0;
   while (time>=3600){
      time-=3600
      newH++
   }
   while (time>=60){
      time-=60
      newM++
   }
   while (time>=1){
      time-=1
      newS++
   }
   newH.toString().length==1?newH='0'+newH:1
   return `${newH}:${('0'+newM).slice(-2)}:${('0'+newS).slice(-2)}`;
}