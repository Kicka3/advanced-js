function quicksum(packet){
   if (/[^ A-Z]/g.test(packet)) return 0
   return packet.split``.map((v,i)=>v===' '?0:(v.charCodeAt()-64)*(i+1)).reduce((a,b)=>a+b,0)
}