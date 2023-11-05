function addProperty(obj, prop, value) {
   if (obj.hasOwnProperty(prop)){throw Error()}
   obj[prop]=value
   return obj
}