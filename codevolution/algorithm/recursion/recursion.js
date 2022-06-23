/*
Problem

Give a number ‘n’, find the nth element of the Fibonacci sequence

recursiveFibonacci(0) = 0
recursiveFibonacci(1) = 1
recursiveFibonacci(6) = 8
*/

function recursiveFibonacci(n) {
  if (n < 2) return n;
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

console.log(recursiveFibonacci(0)); // 0
console.log(recursiveFibonacci(1)); // 1
console.log(recursiveFibonacci(6)); // 1

// O(n) - iterative
// O(2^n) - recursive
// 피보나치 수열을 구할 때 재귀함수를 사용하는 것은 좋지 않은 방법이다.

/* ---------------------------------------------------------------------- */

/*
Problem

Give an integer ‘n’, find the factorial of that integer

factorial(4) = 4 * 3 * 2 * 1 = 24
factorial(5) = 5 * 4 * 3 * 2 * 1 = 120
*/

function recursiveFactorial(n) {
  if (n === 0) return 1;
  return n * recursiveFactorial(n - 1);
}

console.log(recursiveFactorial(0)); // 1
console.log(recursiveFactorial(1)); // 1
console.log(recursiveFactorial(5)); // 120

// Big-O = O(n)
