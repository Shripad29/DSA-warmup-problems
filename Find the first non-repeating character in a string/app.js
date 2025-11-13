
// Find the first non-repeating character in a string
function firstNonRepeatingChar(str) {
    const map = {};
  
    // First pass: count characters
    for (let char of str) {
      map[char] = (map[char] || 0) + 1;
    }
  
    // Second pass: find the first char with count 1
    for (let char of str) {
      if (map[char] === 1) {
        return char;
      }
    }
  
    return null; // if no non-repeating character
  }
console.log( firstNonRepeatingChar("swiss"));