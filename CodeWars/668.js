function whoseMove(lastPlayer, win) {
   if (lastPlayer === 'black'  && win === true) {
      console.log('black')
      return 'black'
   } else if (lastPlayer === 'black' && win === false) {
      console.log('white')
      return 'white'
   } else if (lastPlayer === 'white' && win === false) {
      console.log('black')
      return 'black'
   } else if (lastPlayer === 'white' && win === true) {
      console.log('white')
      return 'white'
   }

}