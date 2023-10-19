//9.Удалите объект с id=1 из массива  friends
let superUserCorrect1 = {...superUser, friends: superUser.friends.filter(el => el.id !== 1)};
console.log(superUserCorrect1)
console.log("9=============================================")


//10. поменяйте объекту с id=2 из массива  friends значение св-ва name на
// "Donald"
let superUserCorrect2 = {
   ...superUser, friends: superUser.friends.map(el => el.id === 2 ? {...el, name: "Donald"} : el)
};
console.log(superUserCorrect2)
console.log("10=============================================")