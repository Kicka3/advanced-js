function noSpace(x){
   return x.split('').filter(i => i !== " ").join('');
}

function noSpace(x){
   let a = x.split(' ').join('');
   // console.log(a)
}

function noSpace(x){
   let b = "";
   for (let i = 0; i < x.length; i++){
      if (x[i] !== " "){
         b += x[i];
         // console.log(b);
      }
   }
}


function noSpace(x){
   let c = x.split(' ').reduce((a,c) => a + c);
   // console.log(c);
}