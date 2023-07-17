function century(year) {
    if(year.toString().length < 3){
      return 1;
    }
    const c = +year.toString().slice(0, -2)
    if(year % 100 === 0){
      return c;
    }
return c +1;
}

