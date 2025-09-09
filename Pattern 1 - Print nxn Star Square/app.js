// Pattern 1: Print nxn Star Square

// Print a square pattern of stars (*) of size n x n.

function printStarSquare(n) {
    for (let i = 0; i < n; i++) {
        let row = '';
        for (let j = 0; j < n; j++) {
            row += '* ';
        }
        console.log(row.trim());
    }
}       
printStarSquare(5);
// Output for n = 5:
// * * * * *                                        
// * * * * *
// * * * * *
// * * * * *
// * * * * *
// You can change the value of n to print a different size square.