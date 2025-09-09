// Pattern 2: Right-Angled Star Triangle
// Print a right-angled triangle of stars with n rows.

function printRightAngledStarTriangle(n) {
    for (let i = 1; i <= n; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += '* ';
        }
        console.log(row.trim());
    }
}
printRightAngledStarTriangle(5);
// Output for n = 5:
// *
// * *
// * * *
// * * * *
// * * * * *
// You can change the value of n to print a different size triangle.
