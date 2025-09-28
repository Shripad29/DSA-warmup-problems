// Problem Statement:
// Write a function isPalindrome(x) that takes an integer x and returns true if it reads the same backward and forward; otherwise false.

// Requirements:

// Handles both positive and negative integers.
// Return false for negative numbers (not Palindromes).

// Constraints:

// Time Complexity: O(d)Where dis the number of digits.

// Space Complexity: O(1)Only a few variables are used.

function isPalindrome(x) {
    // Negative numbers are not palindromes
    if (x < 0) return false;

    // Initialize variables to store the reversed number and the original number
    let reversed = 0;
    let original = x;

    // Reverse the integer
    while (x > 0) {
        let digit = x % 10; // Get the last digit
        reversed = reversed * 10 + digit; // Append it to the reversed number
        x = Math.floor(x / 10); // Remove the last digit from x
    }

    // Check if the original number is equal to the reversed number
    return original === reversed;
}
// Example usage:
console.log(isPalindrome(121)); // true
console.log(isPalindrome(-121)); // false
console.log(isPalindrome(10)); // false
console.log(isPalindrome(12321)); // true
console.log(isPalindrome(0)); // true

