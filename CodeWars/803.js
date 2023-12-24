function translateDate(dateStr){
   return dateStr.replace(/[^-]/g,v=>(v.charCodeAt()-50).toString().padStart(2, 0))
}