const squareDigits = num => +String(num).split('').map(element => element ** 2).join('')



function order(words){
   return words.split(' ').sort((first, second) => {
      return first.match(/\d/)[0] - second.match(/\d/)[0]
   }).join(' ')
};
