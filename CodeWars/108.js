function high(x){
   const words_array = x.split(' ')
   
   const word_scores = words_array.map((item) => {
     return item.split('').reduce((x, y) => {
       return x + (y.charCodeAt(0))
     }, 0)
   })
   const best_score_index = word_scores.indexOf(Math.max(...word_scores))
   const best_score_word = words_array[best_score_index]
   return best_score_word
}