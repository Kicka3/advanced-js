let language = {
  english: 'Welcome',
  czech: 'Vitejte',
  danish: 'Velkomst',
  dutch: 'Welkom',
  estonian: 'Tere tulemast',
  finnish: 'Tervetuloa',
  flemish: 'Welgekomen',
  french: 'Bienvenue',
  german: 'Willkommen',
  irish: 'Failte',
  italian: 'Benvenuto',
  latvian: 'Gaidits',
  lithuanian: 'Laukiamas',
  polish: 'Witamy',
  spanish: 'Bienvenido',
  swedish: 'Valkommen',
  welsh: 'Croeso'
  }
  function greet(english) {
      let country = "";
      switch(language) {
          case english:
              console.log("welcome")
              return 'Welcome'
          break;
          case czech:
              console.log("welcome")
              return 'Vitejte'
          break;
          case danish:
              console.log("welcome")
              return 'Velkomst'
          break;
          case dutch:
              console.log('Welkom')
              return 'Welkom'
          break;
          case estonian:
              console.log('Tere tulemast')
              return 'Tere tulemast'
          break;
          case finnish:
              console.log('Tervetuloa')
              return 'Tervetuloa'
          break;
          case flemish:
              console.log('Welgekomen')
              return 'Welgekomen'
          break;
          case french:
              console.log('Bienvenue')
              return 'Bienvenue'
          break;
          case german:
              console.log('Willkommen')
              return 'Willkommen'
          break;
          case irish:
              console.log('Bienvenue')
              return 'Bienvenue'
          break;
          case italian:
              console.log('Benvenuto')
              return 'Benvenuto'
          break;
          case latvian:
              console.log('Gaidits')
              return 'Gaidits'
          break;
          case lithuanian:
              console.log('Laukiamas')
              return 'Laukiamas'
          break;
          case polish:
              console.log('Witamy')
              return 'Witamy'
          break;
          case spanish:
              console.log('Bienvenido')
              return 'Bienvenido'
          break;
          case swedish:
              console.log('Valkommen')
              return 'Valkommen'
          break;
          case welsh:
              console.log('Croeso')
              return 'Croeso'
          break;
      }
  
  }
  
  greet(welsh);
  
  
  greet = language => 
  (hello => hello[language] || "Welcome")
  ({
     english: 'Welcome',
     czech: 'Vitejte',
     danish: 'Velkomst',
     dutch: 'Welkom',
     estonian: 'Tere tulemast',
     finnish: 'Tervetuloa',
     flemish: 'Welgekomen',
     french: 'Bienvenue',
     german: 'Willkommen',
     irish: 'Failte',
     italian: 'Benvenuto',
     latvian: 'Gaidits',
     lithuanian: 'Laukiamas',
     polish: 'Witamy',
     spanish: 'Bienvenido',
     swedish: 'Valkommen',
     welsh: 'Croeso'
  })
   