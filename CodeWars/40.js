const pin = "2112";
const pin2 = "123456";
const pin3 = "11223456";

function validatePIN (pin) {
  if(pin.length === 4 || pin.length === 6) {
      console.log("True")
    return "true";
  } else { 
      console.log("False")
    return "false";
  }
}
validatePIN(pin3);


function validatePIN (pin) {
  if(pin.length != 4 && pin.length != 6) {
    return false;
  }
  for (let i =  0; i <pin.length; i++){
    if (pin[i] >'9' || pin[i] < '0') {
      return false;
    }
  }
  return true;
}



