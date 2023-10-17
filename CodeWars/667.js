const whoseMove = (lastPlayer, win) => (lastPlayer === 'black' && win === true) ? 'black' :
   (lastPlayer === 'black' && win === false) ? 'white' :
      (lastPlayer === 'white' && win === true) ? 'white' : 'black'