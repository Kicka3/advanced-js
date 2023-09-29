var getMilitaryTime = function(input) {
   let t = input.slice(-2);
   let time= input.slice(0,-2).split(`:`);
   let hour = t==='AM'?time[0]*1%12:12+time[0]*1%12;
   return `${('0'+hour).slice(-2)}:${time[1]}:${time[2]}`
};