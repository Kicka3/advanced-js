function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
  if (startPriceOld>=startPriceNew) return [0,startPriceOld-startPriceNew] 
  var count=0;
  var money=startPriceOld;
  for (let i=1;money<=startPriceNew;i++){
  if (i%2==0){percentLossByMonth+=0.5}
    count++;
    startPriceOld = startPriceOld - (startPriceOld*(percentLossByMonth/100));
		startPriceNew = startPriceNew - ((startPriceNew*percentLossByMonth)/100);
		money = startPriceOld + (savingperMonth*count);
    };
   return [count,Math.round(money-startPriceNew)];
  
}