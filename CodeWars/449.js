function eliminateUnsetBits(number) {
   return parseInt(number.replace(/0/g,'').padStart(2),2)||0
}