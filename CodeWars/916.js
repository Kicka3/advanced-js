function amaroPlan(pirateNum){
  let gold = pirateNum*20
  let arr = [];
  for (let i=1;i<pirateNum;i++){
    if (i%2===0)
    {
      arr.push(1)
      gold--
    }else {arr.push(0)}
  }
  arr.unshift(gold)
  return arr
}