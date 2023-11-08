function searchNames( logins ){
   return logins.filter(a => a[0].endsWith('_'))
}

MyNamespace = MyNamespace || {}

MyNamespace.MyClass = class{
   constructor(arg){
      this.arg = arg
   }

   sayHello(){
      return this.arg
   }
}