/* 
# Cartesian product

Problem

Given two finite non-empty sets, find their Cartesian Product

const A = [1, 2]
const B = [3, 4]
A x B = [[1, 3], [1, 4], [2, 3], [2, 4]]

const C = [1, 2]
const D = [3, 4, 5]
C x D = [[1, 3], [1, 4], [1, 5], [2, 3], [2, 4], [2, 5]]
*/

function cartesianProduct(arr1, arr2) {
  const result = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      result.push([arr1[i], arr2[j]]);
    }
  }

  return result;
}

const arr1 = [1, 2];
const arr2 = [3, 4, 5];
console.log(cartesianProduct(arr1, arr2));
// [[1, 3], [1, 4], [1, 5], [2, 3], [2, 4], [2, 5]]

// Big-O = O(m*n)
// 두 개의 배열의 길이기 다르므로 m * n의 시간 복잡도를 갖는다.
