
let year1 = '1705'
let year2 = '1900'
let year3 = '1601'
let year4 = '2000'



function century(year) {
    if(year % 2 == 0) {
        let odd = year.split('').slice(0,2).reduce((acc, curr) => acc + curr)
        console.log(odd)
        return odd;
    } else {
        let even = year.split('').slice(0,2).reduce((summ, curr) => summ + curr)
        let resB = Number(even);
        let result = resB + 1;
        console.log(result)
        return result;
    }
  
  
  return;
}

century(year1)
century(year2)
century(year3)
century(year4)