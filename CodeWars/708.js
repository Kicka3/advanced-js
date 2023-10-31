function theVar(theVariables) {
   return theVariables.split('+').map(v=>v.charCodeAt()-96).reduce((a,b)=>a+b,0);
}