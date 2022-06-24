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
