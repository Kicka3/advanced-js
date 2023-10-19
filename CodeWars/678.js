//5. Сформируйте массив студентов, у которых 100 и более баллов (filter)
let bestStudents = structuredClone(students);
console.log(bestStudents.filter(el => el.scores > 100).sort((a, b) => a.scores - b.scores).reverse())
console.log("5=============================================")


//6. Сформируйте массив имён студентов (map)
let studentsNames = structuredClone(students);
console.log(studentsNames.map(el => el.name))
console.log("6=============================================")