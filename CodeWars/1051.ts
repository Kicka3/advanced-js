function calculator(a,b,sign){
    const validSigns = "+,-,/,*";

    if(typeof(a) !=='number' || typeof(b) !=='number') return 'unknown value';

    const operations = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a - b,
        '/': (a, b) => a / b,
    }

    return operations[sign] ? operations[sign](a,b) : "unknown value";
}

console.log(calculator(2,3,"*"))
console.log(calculator(2,5,"-"))
console.log(calculator(10,2,"/"))
console.log(calculator(10,"fe","22"))
