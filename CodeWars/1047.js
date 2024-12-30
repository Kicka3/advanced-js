let str= "---------\n| | | | |\n---------\n| | | | |\n---------\n| | | | |\n---------\n| | | | |\n---------\n"
function buildTableText(row, column, character) {
   let arr = str.split(`---------\n`);
   arr[row+1]= arr[row+1].split(' ').map((v,i)=>i===column?v='|'+character:v).join(` `).replace(`${character} `,`${character}`)
   return arr.join(`---------\n`);
}