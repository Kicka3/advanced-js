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

