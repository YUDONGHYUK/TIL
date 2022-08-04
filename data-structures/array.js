const arr = [1, 2, 3, 'doyu']; // array can contain a mix of data types

// to access an element we use the index which starts at 0
console.log(arr[0]); // 1

// push - to add an element to the end of the array
arr.push(4);

// unshift - to add an element at the beginning of the array
arr.unshift(0);

// for of - to iterate over all the elements in the array
for (const item of arr) {
  console.log(item); // 0 1 2 3 'doyu' 4
}

// pop - to remove an item from the end of the array
arr.pop();

// shift - to remove an item from the beginning of the array
arr.shift();

for (const item of arr) {
  console.log(item); // 1 2 3 'doyu'
}

/* apart from these array have methods
map, filter, reduce, concat, slice and splice */

/* Array Big-O time complexity

- 배열의 경우 작업을 수행할 때마다 적절한 인덱스를 유지하는 것이 매우 중요하다.
- 이것이 시간 복잡도를 결정할 때 고려해야 하는 것이기 때문이다.

insert / remove from end - O(1)
insert / remove from beginning - O(n) (인덱스는 배열의 나머지 모든 요소에 대해 재설정되어야 한다.)
access - O(1)
search - O(n)
push / pop - O(1)
shift / unshift / concat / slice / splice - O(n)
forEach / map / filter / reduce - O(n) */
