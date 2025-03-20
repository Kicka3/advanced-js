function explode(x) {
    const isFirst = typeof x[0] === "number";
    const isLast = typeof x[1] === "number";

    let score = 0;

    // Вычисляем score
    if (isFirst && isLast) {
        score = x[0] + x[1];
    } else if (isFirst) {
        score = x[0];
    } else if (isLast) {
        score = x[1];
    } else {
        return "Void!"; // Если ни один элемент не является числом
    }

    // Создаем массив массивов
    let result = [];
    for (let i = 0; i < score; i++) {
        result.push([...x]);
    }

    return result;
}

console.log(explode([9, 3])); // [[9, 3], [9, 3], ..., [9, 3]] (12 раз)
console.log(explode([6, "c"])); // [[6, "c"], [6, "c"], ..., [6, "c"]] (6 раз)
console.log(explode(["a", "b"])); // "Void!"
console.log(explode(["a", 4])); // "Void!"
console.log(new Array(1+2).fill(1));