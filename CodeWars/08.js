


// function updateLight(current) {
//    if (current == "green") {
//      return "yellow"
//    } else if (current == "yellow") {
//      return "red"
//    } else if (current == "red") {
//      return "green"
//    } else if (current == "yellow") {
//      return "green"
//    }
   
//  }

const updateLight = current => 
   current == 'red' ? 'green' : current == 'green' ? 'yellow' : 'red'

 