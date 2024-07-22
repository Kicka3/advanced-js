function errBob(string){
   return string.split(` `).map(v=>{
      if (!/\w/.test(v[v.length-1])){
         if (!/[auioe]/i.test(v[v.length-2])){
            return v[v.length-2]===v[v.length-2].toUpperCase()?v.slice(0,-1)+"ERR"+v.slice(-1):v.slice(0,-1)+"err"+v.slice(-1)}}
      else if (/\w/.test(v[v.length-1])){
         if (!/[auioe]/i.test(v[v.length-1])){
            return v[v.length-1]===v[v.length-1].toUpperCase()?v+"ERR":v+"err"}}
      return v
   }).join` `
}