import { deleteDecksTC } from '../../../../../src/features/decks/decks-thunks.ts';
function merryChristmas(s1,s2){
   let check = 'Merry Christmas!'.split``.sort().join``
   for (let i=0;i<s2.length;i++){
      let a=new RegExp(`${s2[i]}`)
      if (s1.includes(s2[i])){
         s1=s1.replace(a,'')
      } else{
         s1+=s2[i]
      }
   }
   return  check===s1.split``.sort().join``
}