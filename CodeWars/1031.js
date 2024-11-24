function alexMistakes (numberOfKata, timeLimit){
   return Math.floor(Math.log2((timeLimit - 6 * numberOfKata) / 5 + 1))
}