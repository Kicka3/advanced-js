function spinalCase(str) {
  // Create a variable for the white space and underscores.
  var regex = /\s+|_+/g;

  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
    // console.log(str)
  // Replace space and underscore with -
  
  let a = str.replace(regex, "-").toLowerCase();
  console.log(a)
  return a;
}