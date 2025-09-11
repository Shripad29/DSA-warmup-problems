// Pattern 6: Print a Right-Aligned Right-Angled Triangle of Stars

// Write a program that prints a right-aligned triangle of stars increasing row by row, with leading spaces for alignment.

function printRightAlignedTriangle(rows) {
    for (let i = 1; i <= rows; i++) {
        let spaces = ' '.repeat(rows - i);
        let stars = '*'.repeat(i);
        console.log(spaces + stars);
    }
}
printRightAlignedTriangle(5);
// Output:
//     *
//    **
//   ***
//  ****
// *****
// The function printRightAlignedTriangle takes the number of rows as input and prints a right-aligned triangle of stars. Each row contains leading spaces followed by stars, creating the desired alignment.

// You can change the number of rows by passing a different value to the function.
// For example, printRightAlignedTriangle(7) will print a triangle with 7 rows.

