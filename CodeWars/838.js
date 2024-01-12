function tops(msg) {
   let str='';
   for (let i=1,j=2;i<msg.length;i+=j*2+1,j+=2){
      str+=msg[i]
   }
   return str.split``.reverse().join``;
}