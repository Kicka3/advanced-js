function countPositivesSumNegatives(input) {
  if (input == 0 || input === null) return [];
 let posResult = input.filter(el => el > 0).length
 let negResult = input.filter(el => el < 0).reduce((el, acc) => el + acc, 0)
 console.log(posResult);
 console.log(negResult);
 return [posResult, negResult];
}