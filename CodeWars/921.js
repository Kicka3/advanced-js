function sc(obj){
   obj=obj.toString().replace(/[^\d-,]/gi,'')
   if (obj.includes(',')){
      return obj===obj.split(',').reverse().join(',')
   }
   return obj===obj.split('').reverse().join('')
}