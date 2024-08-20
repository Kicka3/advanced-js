function winnerOfTrick( cards, players ){
   const arr  =  {'2':0,'3':1,'4':2,'5':3,'6':4,'7':5,'8':6,'9':7,'T':8,'J':9,'Q':10,'K':11,'A':12}
   let a= []
   for(let i=0;i<cards.length;i++){
      a.push(arr[cards[i][0]])
   }
   let winner = players[a.findIndex(v=>v===Math.max(...a))]
   let tie = a.indexOf(Math.max(...a))!==a.lastIndexOf(Math.max(...a))
   let t = a.map(v=>v===Math.max(...a))
   if (tie) return `Tie! (${players.filter((v,i)=>t[i]===true).join`,`})`
   return `${winner} wins`
}