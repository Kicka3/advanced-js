function doubleOrNothing(cash, wager, losses){
  while(losses>1){
    wager*=2
    losses--
  }
  cash=cash-(wager)
  return cash>=0?cash:"I'll pay you back later"
}