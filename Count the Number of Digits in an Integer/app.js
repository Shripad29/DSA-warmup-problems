// Count the Number of Digits in an Integer
// Problem Statement:
// Write a function countDigits(n)that takes an integer n and returns how many digits it contains.

function countDigits(n) {
    // Convert the integer to a string and return its length
    return n.toString().length;
}
// Example usage:
console.log(countDigits(12345)); // Output: 5
console.log(countDigits(-6789)); // Output: 4
console.log(countDigits(0)); // Output: 1
console.log(countDigits(100000)); // Output: 6
console.log(countDigits(-42)); // Output: 2
console.log(countDigits(7)); // Output: 1
console.log(countDigits(1234567890)); // Output: 10
console.log(countDigits(-1001)); // Output: 4
console.log(countDigits(999999999)); // Output: 9