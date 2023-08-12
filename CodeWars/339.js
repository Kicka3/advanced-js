function whoTookTheCarKey(message) {
   return message.map(v => String.fromCharCode(parseInt(v,2))).join('')
 }