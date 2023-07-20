function digPow(n, p){
	let digitSum = 0;
	let strNum = String(n);
	for(let i in strNum){
	  digitSum += strNum[i]**p;
	  p++;
	}
	return Number.isInteger(digitSum/n) ? digitSum/n : -1;
 }