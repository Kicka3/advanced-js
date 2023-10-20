//1. Создайте полную (глубокую) копию объекта user
let deepCopyUser = structuredClone(user);
const deepCopyUser2 = JSON.parse(JSON.stringify(user))
console.log("1=============================================")


//2. Создайте полную (глубокую) массива students
let deepCopyStudents = students.map(el => ({...el}));
console.log(deepCopyStudents)
console.log(11111111111111111)
console.log("2=============================================")