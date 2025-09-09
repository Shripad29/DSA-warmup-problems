// Pattern 3: Print a Right-Angled Number Triangle
// Write a program that prints a right-angled triangle of numbers of height n.

function printRightAngledNumberTriangle(n) {
    for (let i = 1; i <= n; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += j + ' ';
        }
        console.log(row.trim());
    }
}
printRightAngledNumberTriangle(5);
// Output for n = 5:
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// You can change the value of n to print a different size triangle.
