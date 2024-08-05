function tombola(range, number) {
   let wins=0;
   for (let i=0;i<=range;i++){
      if (new RegExp(`${number}`).test(i.toString()))wins++
   }
   return wins
}