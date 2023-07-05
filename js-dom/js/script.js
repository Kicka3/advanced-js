let str = "Kirya";


function doubleChar(str) {
	let arr = str.split('');
	console.log(arr);
	
	let double = arr.map(i => i += i).join('')
	console.log(double);

}
doubleChar (str);

