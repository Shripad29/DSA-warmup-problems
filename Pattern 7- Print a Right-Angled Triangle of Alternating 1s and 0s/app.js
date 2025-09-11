// Pattern 7: Print a Right-Angled Triangle of Alternating 1s and 0s

// Write a program that prints a triangle of alternating 1s and 0s starting with 1 on each row.

function printAlternatingTriangle(rows) {
    for (let i = 1; i <= rows; i++) {
        let line = '';
        for (let j = 1; j <= i; j++) {
            line += (j % 2 === 1) ? '1' : '0';
        }
        console.log(line);
    }
}
printAlternatingTriangle(5);
// Output:
// 1
// 10
// 101
// 1010
// 10101
// The function printAlternatingTriangle takes the number of rows as input and prints a triangle where each row contains alternating 1s and 0s, starting with 1. Each subsequent number in the row alternates between 1 and 0.

// You can change the number of rows by passing a different value to the function.

// For example, printAlternatingTriangle(7) will print a triangle with 7 rows.
