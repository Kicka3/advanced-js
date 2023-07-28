function bitsWar(numbers) {
  let odd = numbers.filter(v=>v%2!==0)
  let odd2 = odd.map(v=>Math.abs(v).toString(2).replace(/0/g,'').length).map((v,i)=>odd[i]<0?v*-1:v*1).reduce((a,b)=>a+b,0)
  let even = numbers.filter(v=>v%2===0)
  let even2 = even.map(v=>Math.abs(v).toString(2).replace(/0/g,'').length).map((v,i)=>even[i]<0?v*-1:v*1).reduce((a,b)=>a+b,0)
  return odd2>even2?'odds win':odd2===even2?'tie':'evens win'
}