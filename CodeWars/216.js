function AtbashCipher(abc) {
  this.decode = this.encode = function(str) {
    return str.replace(/./g, function(c) {
      return abc[abc.length - 1 - abc.indexOf(c)] || c;
    });
  };
}