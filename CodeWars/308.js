function int32ToIp(int32){
   if (!int32) return "0.0.0.0"
   return int32.toString(2).match(/\d{8}/g).map(v=>parseInt(v,2)).join`.`
}