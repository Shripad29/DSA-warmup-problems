// Find Smallest Number in an Array

// Problem Statement:

// Write a function that returns the smallest number in an array.

function findSmallest(arr) {
    let smallest = Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }
    return smallest;
}

let arr = [2, -6, 4, 8, 1, -9];
let result = findSmallest(arr);
console.log("Result:", result); // Output: -9

// Explanation: The smallest number in the array is -9, so the function returns -9. 

