// Even or Odd Number

// Problem Statement:

// Write a function that accepts a number and checks whether it is Even or Odd. If the number is divisble by 2, it’s an Even number. Otherwise, it’s an Odd number. Test the function with inputs 18 and 5.

// let number = 18;

function checkEvenOdd(number) {
  if (number % 2 === 0) {
    console.log(number + " is an Even number.");
  } else {
    console.log(number + " is an Odd number.");
  }
}

checkEvenOdd(18)
checkEvenOdd(5)