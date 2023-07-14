const x = '45385593107843568';

function fakeBin(x){
    
    let result = x.split('').map(n => n > 5 ? 0 : 1).join('');
    console.log(result);
    
}
fakeBin(x)