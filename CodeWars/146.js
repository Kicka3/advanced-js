function padIt(str,n){
  while (n > 0) {
    if (n % 2) {
      str = '*' + str
    } else {
      str = str + '*'
    }
    n --
  }
  return str
}