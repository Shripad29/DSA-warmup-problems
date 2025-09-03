// Find the Second Largest Number in an Array

// Problem Statement:

// Write a function secondLargest(arr) that returns the second largest distinct number in an array.

function secondLargest(arr) {       
    let first = -Infinity;
    let second = -Infinity;

    for (let num of arr) {
        if (num > first) {
            second = first;
            first = num;
        } else if (num > second && num < first) {
            second = num;
        }
    }

    return second === -Infinity ? null : second;

}



let arr = [4, 9, 0, 2, 8, 7, 1];

let result = secondLargest(arr);

console.log("The second largest number is:", result); // Output: The second largest number is: 8