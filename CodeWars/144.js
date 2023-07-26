function howManydays(month){;
  switch (month){
    case 4:
    case 6:
    case 9:
    case 11: 
      return 30;
      break;
    case 2:
      return 28;
      break;
  }
  return 31;
}