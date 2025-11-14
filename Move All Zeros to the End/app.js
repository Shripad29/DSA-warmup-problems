function moveZerosToEnd(arr) {

    // Step 1: Initialize pointer j
    // j always points to the next position where a non-zero element should be placed
    let j = 0;
  
    // Step 2: Traverse the entire array
    for (let i = 0; i < arr.length; i++) {
  
      // Step 3: Check if the current element is non-zero
      if (arr[i] !== 0) {
  
        // Step 4: Swap arr[i] with arr[j]
        // Because we want all non-zero elements to be moved to the front
        [arr[i], arr[j]] = [arr[j], arr[i]];
  
        // Step 5: Move j forward
        // j now points to the next available position for a non-zero element
        j++;
      }
    }
  
    // Step 6: Return the modified array
    return arr;
  }
  
  
  console.log(moveZerosToEnd([0,1,0,3,12]));
// Output: [1, 3, 12, 0, 0]
