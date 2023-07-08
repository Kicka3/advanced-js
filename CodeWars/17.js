function boolToWord( bool ){
  switch (bool) {
      case true:
        return "Yes"
      break;
      case false:
        return "No"
      break;
  }
}

function boolToWord( bool ){
  return bool ? 'Yes':'No';
}

function boolToWord( bool ){
  if (bool) {
    return 'Yes';
  } else {
    return 'No';
  }
}


let boolToWord = bool => bool ? 'Yes' : 'No';