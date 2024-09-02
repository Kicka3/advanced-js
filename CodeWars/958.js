var scoreToTally = function(score){
   let arr =[];
   while (score>=5){
      arr.push('e <br>')
      score-=5
   }
   while (score>=4){
      arr.push('d')
      score-=4
   }
   while (score>=3){
      arr.push('c')
      score-=3
   }
   while (score>=2){
      arr.push('b')
      score-=2
   }
   while (score>=1){
      arr.push('a')
      score-=1
   }
   return arr.join(``)
}