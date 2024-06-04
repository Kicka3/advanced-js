const console2=console.log;
console.log=(input)=>{
   this.answer=input;
   console2(input)
}