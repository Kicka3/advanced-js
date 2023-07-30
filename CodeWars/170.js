function byState(str) {
  let arr = str.replace(/,/g,"").split`\n`;
  let states = [["AZ","Arizona"],
                ["CA","California"],
                ["ID","Idaho"],
                ["IN","Indiana"],
                ["MA","Massachusetts"],
                ["OK","Oklahoma"],
                ["PA","Pennsylvania"],
                ["VA","Virginia"]];
  let res = "";
  states.forEach(([s,n]) => {
    let temp = arr.filter(x => x.slice(-2) === s).sort();
    if(temp.length){
      res += "\r\n " + n + "\r\n";
      res += temp.map(x => `..... ${x.slice(0,-3)} ${n}`).join`\r\n`;
    }
  });
  return res.slice(3);
}