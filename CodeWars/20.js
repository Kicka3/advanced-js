
function lovefunc(flower1, flower2){
  return flower1 % 2 !== flower2 % 2;
}


function lovefunc(flower1,flower2){
  if (flower1%2==0&&flower2%2!==0) {
    return true;
  }else if(flower1%2!==0&&flower2%2==0){
    return true;
  }else return false;
}

function lovefunc(flower1, flower2){
  return ((flower1%2==0 && flower2%2!=0) || (flower1%2!=0 && flower2%2==0)) ? true : false;
}

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min.apply(null,args);
  }
}