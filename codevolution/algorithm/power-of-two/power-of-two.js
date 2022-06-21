/*
Problem

Give a positive integer ‘n’, determine if the number is a power of 2 or not

isPowerOfTwo(1) = true
isPowerOfTwo(2) = true
isPowerOfTwo(5) = false
*/

function isPowerOfTwo(n) {
  if (n < 1) {
    return false;
  }
  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
}

console.log(isPowerOfTwo(1)); // true
console.log(isPowerOfTwo(2)); // true
console.log(isPowerOfTwo(5)); // false

// Big-O = O(logn)

// ---------------------------------------

// Bitwise Power of Two

function isPowerOfTwoBitWise(n) {
  if (n < 1) {
    return false;
  }
  return (n & (n - 1)) === 0;
}

console.log(isPowerOfTwoBitWise(1)); // true
console.log(isPowerOfTwoBitWise(2)); // true
console.log(isPowerOfTwoBitWise(5)); // false

// Big-O = O(1)
