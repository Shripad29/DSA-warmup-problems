// Reverse Digits of an Integer

// Question: Reverse Integer with Overflow Check
// Write a function reverse(x) that takes a 32-bit signed integer and returns its digits reversed. If the reversed value overflows the 32-bit signed integer range, return 0.

// Requirements
// Reverse the digits of a 32-bit signed integer.
// Return 0 if the result overflows.
// Constraints
// Time Complexity: O(d) where d is the number of digits.
// Space Complexity: O(1) — constant space.

function reverse(x) {
    const INT_MIN = -Math.pow(2, 31); // -2147483648
    const INT_MAX = Math.pow(2, 31) - 1; // 2147483647

    let reversed = 0;
    let sign = x < 0 ? -1 : 1; // Determine the sign of the input
    x = Math.abs(x); // Work with the absolute value

    while (x > 0) {
        let digit = x % 10; // Get the last digit
        reversed = reversed * 10 + digit; // Append it to the reversed number
        x = Math.floor(x / 10); // Remove the last digit from x
    }

    reversed *= sign; // Restore the original sign

    // Check for overflow
    if (reversed < INT_MIN || reversed > INT_MAX) {
        return 0;
    }

    return reversed;
}
// Example usage:
console.log(reverse(123)); // 321
console.log(reverse(-123)); // -321
console.log(reverse(120)); // 21
console.log(reverse(0)); // 0
console.log(reverse(1534236469)); // 0 (overflow)
console.log(reverse(-2147483648)); // 0 (overflow)
console.log(reverse(1463847412)); // 2147483641
console.log(reverse(-1463847412)); // -2147483641
