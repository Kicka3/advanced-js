function camelize(str){
   return str.replace(/[^a-z0-9]/gi,' ').split` `.map(v=>v.slice(0,1).toUpperCase()+v.slice(1).toLowerCase()).join``
}