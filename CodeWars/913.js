function cookingTime(weight){
  if (weight===0) return "There is no chicken!"
  let r = Math.ceil((weight/0.450)*20+20)
  while(r%5!==0){
    r++
  }
  let h=0
  while (r>=60){
    r-=60
    h++
  }
  return `${h?h>1?`${h} hrs`:`${h} hr`:''}${r?r>1?` ${r} mins`:` ${r} min`:''}`.trim()
}