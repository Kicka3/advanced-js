function sumArray(array) {
  // СРАВНИВАЕМ МАССИВ И ДЛИНУ МАССИВА
  //ЕСЛИ ДЛИННА БОЛЬШЕ 1, ТО
  // ПОМЕЩАЕМ РЕЗУЛЬТАТ В ПЕРЕМЕННУЮ
  // СОРТИРУЕМ МАССИВ С SORT (МНЬШЕЕ -> БОЛЬШЕЕ)
  //КОПИРУЕМ В НОВЫЙ МАССИВ С SLICE ВСЕ ЧИСЛА, КРОМЕ ПЕРВОГО (НАИМЕНЬШЕГО И ПОСЛЕДНЕГО (НАИБОЛЬШЕГО))
  //СКЛАДЫВАЕМ ВСЕ ЗНАЧЕНИЯ В МЕССИВЕ С 0 ИНДЕКСА
  //ВОЗВРАЩАЕМ РЕЗУЛЬТАТ
  
    if(array && array.length > 1) {
      const sortedArr = array.sort((a,b) => a - b).slice(1, -1);
      return sortedArr.reduce((acc, cur) => acc + cur, 0)
    }
  return 0;
}

function positiveSum(arr) {
  console.log(arr)
 
   let counter = 0;
  for (let i = 0; i < arr.length; i++){
    if (arr[i] > 0){
        counter += arr[i]
        console.log(counter)
    } 
  }
  return counter;
}