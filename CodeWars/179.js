class NamedOne {
   constructor(f, l) { this.firstName = f; this.lastName = l }
   get fullName() { return this.firstName + ' ' + this.lastName }
   set fullName(v) { if (/ /.test(v)) [this.firstName, this.lastName] = v.split(' ') }
 }