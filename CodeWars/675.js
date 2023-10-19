//11. добавьте в список друзей нового друга
const newFriend = {
   id: 5,
   name: "Nick",
   age: 27,
   isMarried: false,
   scores: 99
}
let superUserCorrect3 = {...superUser, friends: [...superUser.friends, newFriend]};

console.log("11=============================================")

console.log(superUserCorrect3)