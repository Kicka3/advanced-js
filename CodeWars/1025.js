function twentyOne(...arr) {
   let deck = ['2','3','4','5','6','7','8','9','1','A']
   let deck2 = ['J','Q','K']
   let sum = arr.map(v=>deck.indexOf(v.slice(0,1))>-1?deck.indexOf(v.slice(0,1))+2:deck2.indexOf(v.slice(0,1))+2).reduce((a,b)=>a+b,0)
   return sum===21?'twenty-one':sum<21?'less':'more'
}