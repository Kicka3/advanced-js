function whoseMove(lastPlayer, win) {
   switch (lastPlayer) {
      case 'black':
         if (win) {
            console.log('black');
            return 'black';
         } else {
            console.log('white');
            return 'white';
         }
      case 'white':
         if (win) {
            console.log('white');
            return 'white';
         } else {
            console.log('black');
            return 'black';
         }
   }
}