function colorOf(r,g,b){
   let a = r.toString(16);
   let e = g.toString(16);
   let c = b.toString(16);
   let n = '#';
   return n + a + e + e + c + c;

   return '#' + fnc(r) + fnc(g) + fnc(b)

}

function fnc(n) {
   let result = n.toString(16);
   return result.length == 1 ? '0' + result : result;
}


function colorOf(r,g,b){

   return '#' + fnc(r) + fnc(g) + fnc(b)

}

function fnc(n) {
   let result = n.toString(16);
   return result.length == 1 ? '0' + result : result;
}
