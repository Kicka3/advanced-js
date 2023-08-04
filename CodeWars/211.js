

Array.prototype.square=function(){
  return this.map(v=>v*v)
  }
  Array.prototype.cube=function(){
  return this.map(v=>v*v*v)
  }
  Array.prototype.sum=function(){
  return this.reduce((a,b)=>a+b,0)
  }
  Array.prototype.average=function(){
  return this.reduce((a,b)=>a+b,0)/this.length
  }
  Array.prototype.even=function(){
  return this.filter(v=>v%2==0)
  }
  Array.prototype.odd=function(){
  return this.filter(v=>v%2!==0)
  }


  Array.prototype.reduce = function(process, initial) {
    for (let i = 0; i < this.length; i++) {
      if (!initial){i++;initial=this[0]}
      initial =  process(initial, this[i]);
   }
   return initial
  }