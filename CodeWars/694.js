function greet (name, owner) {
   return `Hello ${(name === owner ? 'boss' : 'guest')}`
}