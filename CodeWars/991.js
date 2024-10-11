function evenNumbersBeforeFixed(sequence, fixedElement) {
   let index = sequence.indexOf(fixedElement);
   if (index===-1) return -1;
   let arr = sequence.slice(0,index).map(v=>v%2===0);
   if (arr.every(v=>v===false)) return 0;
   return arr.filter(v=>v!==false).lastIndexOf(true)+1
}