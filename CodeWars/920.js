function getCommonDirectoryPath(paths) {
   let arr = [];
   for (let i=0;i<Math.min(...paths.map(v=>v.length));i++){
      if (paths.every(v=>v[i]===paths[0][i])) arr.push(paths[0][i])
      else break
   }
   return arr.join``.replace(/\w+$/g,'')
}