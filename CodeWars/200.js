function shadesOfGrey(n) {
  const shades = []
  
  for (const i = 1; i <= Math.min(n, 254); i++) {
    const grey = ('0' + i.toString(16)).slice(-2)
    shades.push('#' + grey + grey + grey)
  }
  
  return shades
}


var name = 'The Window';

var alpha = {
    name : 'My Alpha',
    getNameFunc : function(){
    return function(){
        return this.name;
        }.bind(this);
    }
};