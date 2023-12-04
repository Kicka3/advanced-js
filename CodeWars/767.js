
var name = 'The Window';

var alpha = {
   name : 'My Alpha',
   getNameFunc : function(){
      return function(){
         return this.name;
      }.bind(this);
   }
};

function lostSheep(friday,saturday,total){
   return total-(friday.reduce((acc,next)=>acc+next,0))-(saturday.reduce((acc,next)=>acc+next,0))
}