// Pattern 5: Print a Reverse Right-Angled Triangle of Increasing Numbers

// Write a program that prints a reverse right-angled triangle where each row starts from 1 and the number of elements decreases with each row.

function printReverseRightAngledTriangle(rows) {
    for (let i = rows; i >= 1; i--) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += j + ' ';
        }
        console.log(row.trim());
    }
}
printReverseRightAngledTriangle(5);
// Output:
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1
// You can change the number of rows by passing a different argument to the function
