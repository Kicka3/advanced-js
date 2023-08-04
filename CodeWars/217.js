function autocomplete(input, d){
  input=input.replace(/[^a-zA-Z]/gi,'')
  const arr=[];
  for (let i=0;i<d.length;i++){
    if (d[i].slice(0,input.length).toLowerCase()===input.toLowerCase()){ arr.push(d[i]) }
  }
  return arr.slice(0,5)
}