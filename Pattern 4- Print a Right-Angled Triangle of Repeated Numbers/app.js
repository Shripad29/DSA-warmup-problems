// Pattern 4: Print a Right-Angled Triangle of Repeated Numbers

// Write a program that prints a right-angled triangle where each row contains the same number repeated.

function printRightAngledTriangle(rows) {   
    for (let i = 1; i <= rows; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += i + ' ';
        }
        console.log(row.trim());
    }
}
printRightAngledTriangle(5);
// Output:
// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5
// You can change the number of rows by passing a different argument to the function