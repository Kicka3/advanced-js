function myReplace (str, before, after) {

  var boolArr =  before.split("").map(function (bLet) {
    return bLet===bLet.toUpperCase() ? true : false;
  });    

  after = after.split("").map(function (aLet) {
    return boolArr[after.indexOf(aLet)] ? aLet.toUpperCase() : aLet.toLowerCase();          
  }).join("");

 return str.replace(before,after);
}