/* 
# Bubble sort

Problem

Given an array of integers, sort the array.

const arr = [-6, 20, 8, -2, 4]
bubbleSort(arr) ⇒ Should return [-6, -2, 4, 8, 20]
*/

function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
}

const arr1 = [8, 20, -2, 4, -6];
bubbleSort(arr1);
console.log(arr1); // [ -6, -2, 4, 8, 20 ]

// Big-O = O(n^2)

/* ---------------------------------------------------------------------- */

/* 
# Insertion sort

Problem

Given an array of integers, sort the array.

const arr = [-6, 20, 8, -2, 4]
bubbleSort(arr) ⇒ Should return [-6, -2, 4, 8, 20]
*/

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = numberToInsert;
  }
}

const arr2 = [8, 20, -2, 4, -6];
insertionSort(arr2);
console.log(arr2); // [ -6, -2, 4, 8, 20 ]

// Big-O = O(n^2)

/* ---------------------------------------------------------------------- */

/* 
# Quick sort

Problem

Given an array of integers, sort the array.

const arr = [-6, 20, 8, -2, 4]
bubbleSort(arr) ⇒ Should return [-6, -2, 4, 8, 20]
*/

function quickSort(arr) {
  if (arr.length < 2) return arr;

  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

const arr3 = [8, 20, -2, 4, -6];
console.log(quickSort(arr3)); // [ -6, -2, 4, 8, 20 ]

// Worst case - O(n^2) -> this happens when the array is already sorted
//   배열을 더 작은 배열로 분할하는 대신, 빈 배열과 전체 배열로 분할한다.
//   결국 다른 모든 요소와 비교하게 되며 이는 2차의 시간 복잡도가 된다.

// Avg case - O(nlogn)
//   Quick sort 알고리즘은 평균적으로 nlogn의 복잡도를 갖는다.
//   배열을 'logn'인 더 작은 배열로 재귀적으로 나누고,
//   for 루프가 'n'의 O를 갖기 때문에 두 개를 결합하면 'nlogn'이다.

/* ---------------------------------------------------------------------- */

/* 
# Merge sort

Problem

Given an array of integers, sort the array.

const arr = [-6, 20, 8, -2, 4]
bubbleSort(arr) ⇒ Should return [-6, -2, 4, 8, 20]
*/

function mergeSort(arr) {
  if (arr.length < 2) return arr;

  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);
  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
  const sortedArr = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) sortedArr.push(leftArr.shift());
    else sortedArr.push(rightArr.shift());
  }

  return [...sortedArr, ...leftArr, ...rightArr];
}

const arr4 = [8, 20, -2, 4, -6];
console.log(mergeSort(arr4)); // [ -6, -2, 4, 8, 20 ]

// Big-O = O(nlogn)
