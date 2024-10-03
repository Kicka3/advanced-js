const makePlural = (options, number) => {
   if (number >= 5 && number <= 20) return options[2];
   switch (number % 10) {
      case 1:
         return options[0];
      case 2:
      case 3:
      case 4:
         return options[1];
      default:
         return options[2];
   }
}