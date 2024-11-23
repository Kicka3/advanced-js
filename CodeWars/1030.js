const xMarksXTheSpot = (input) => {
   let count=0;
   let x=0;
   let y=0;
   input.map((v,i)=>{
      if (v.includes('x')){
         v.map((x,i)=>x==='x'?y=i:v)
         count++;
         x=i;}
      else return v})
   return count===0?[]:count>1?[]:[x,y]
}