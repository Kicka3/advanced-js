const calculate = (...x) => (...y) => {
  return [].concat(x,y).reduce((a,b)=>a+b,0)
}

// const calculate=(...x)=>(...y)=> {
//   return [].concat(x,y).reduce((a,b)=>a+b,0)
// }