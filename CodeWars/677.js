//7. Добавьте всем студентам свойство "isStudent" со значением true (map)
let trueStudents = structuredClone(students);
console.log(trueStudents.map(el => ({...el, isStudent: true})))
console.log("7=============================================")


//8. Nick женился. Выполните соответствующие преобразование массива
// students (map) isMarried
let studentsWithMarriedNick = structuredClone(students);
console.log(studentsWithMarriedNick.map(el => el.name === "Nick" ? {...el, isMarried: true} : el))
console.log("8=============================================")