function evenOrOdd(number) {
  if (number % 2 == 0) {
      console.log("Even");
    return "Even";
  } else if (number % 2  !== 0) {
      console.log("Odd");
    return "Odd"
  }
}

evenOrOdd(8);

const evenOrOdd = number => number % 2 == 0 ? "Even" : "Odd";
