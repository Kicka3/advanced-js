function expandedForm(num) {
  let str = num.toString().split`.`
  let f = str[0].split``.reverse().map((v,i)=>v*1===0?'':v+'0'.repeat(i)).filter(v=>v).reverse().join` + `
  let s = str[1].split``.map((v,i)=>v*1===0?'':v+'/'+'1'+'0'.repeat(i+1)).filter(v=>v).join` + `
  return ([f,s].join` + `).replace(/^[^0-9]+/g,'')
}