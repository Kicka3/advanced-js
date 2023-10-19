//3. Создайте полную (глубокую) копию объекта superUser
let deepCopySuperUser = structuredClone(superUser);
console.log(deepCopySuperUser)
console.log("3=============================================")


//4. Отсортируйте students по успеваемости (лучший идёт первым)(sort)
let sortedByScores;
console.log([...students].sort((a, b) => (a.scores - b.scores)).reverse())
console.log("4=============================================")