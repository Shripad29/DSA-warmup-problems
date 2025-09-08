// Count Negative Numbers in an Array

// Problem Statement:

// Write a function that returns the number of negative numbers in an array.

function countNegatives(arr) {
    let count = 0;
    for (let num of arr) {
        if (num < 0) {
            count++;
        }
    }
    return count;
}   

// Example usage:
const array = [4, -1, 2, -3, 5, -6];
console.log(countNegatives(array)); // Output: 3
// Explanation: The negative numbers in the array are -1, -3, and -6, so the function returns 3.