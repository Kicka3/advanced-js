// Number #1
function areYouPlayingBanjo(name) {
   let arrNames = name.toLowerCase().split(' ')
  console.log(arrNames)
  
  for (let i = 0; i < arrNames.length; i++) {
      if (arrNames[i][0] === 'r') {
          console.log(arrNames[i][0])
          console.log('Plays banjo!')
        return name + ' plays banjo'
      } else {
        return name + " does not play banjo"
          console.log('Does not plays banjo')
      }
  }
}


// Number #2
const areYouPlayingBanjo = name => name.toLowerCase().split(' ')
.map(item => item[0] === 'r' ? name + ' plays banjo' : name + ' does not play banjo').join('')