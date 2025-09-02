// Print All Even Numbers in an Array

// Problem Statement:

// Write a program to print all even numbers from an array.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("Even numbers in the array are:");

for(let i = 0; i< numbers.length; i++){
    if(numbers[i] % 2 === 0){
        console.log(numbers[i]);
    }
}

// Output: 2, 4, 6, 8, 10