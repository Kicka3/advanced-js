function toBinaryString(num){
  let out = "", bit = 1;
   while( num >= bit ) {
       out = ( num & bit ? 1 : 0 ) + out;
       bit <<= 1;
   }
   return out || "0";
}