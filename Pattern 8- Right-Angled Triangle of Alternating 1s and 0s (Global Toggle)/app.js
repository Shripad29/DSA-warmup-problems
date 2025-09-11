// Pattern 8: Right-Angled Triangle of Alternating 1s and 0s (Global Toggle)

// Write a program to print a triangle of alternating 1s and 0s, but the toggle continues globally across rows.

let n = 4;
let toggle = 1;
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < i + 1; j++) {
    row += toggle;
    toggle = toggle === 1 ? 0 : 1;
  }
  console.log(row);
}
// Output:
// 1
// 01
// 101
// 0101
// Explanation:
// The outer loop iterates through each row, while the inner loop prints the numbers in that row.

// The toggle variable is used to switch between 1 and 0 globally across all rows.

// The toggle is updated after printing each number, ensuring the sequence continues across rows.

// The output is a right-angled triangle where the numbers alternate between 1 and 0 continuously.

// Time Complexity: O(n^2) where n is the number of rows. Each row i has i+1 elements, leading to a total of n(n+1)/2 operations.

// Space Complexity: O(1) as we are using a constant amount of extra space.
