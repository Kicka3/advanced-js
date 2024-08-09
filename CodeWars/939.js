function fantasticPerson(table) {
   return table.findIndex(v=>v.every(x=>x===true))
}