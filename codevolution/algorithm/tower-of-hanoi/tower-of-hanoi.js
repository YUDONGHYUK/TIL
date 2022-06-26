/* 
# Tower of Hanoi

Problem

퍼즐의 목적은 다음 규칙에 따라 전체 스택을 마지막 막대로 이동하는 것이다.
  - 한 번에 하나의 디스크만 이동할 수 있다.
  - 각 이동은 스택 중 하나에서 위쪽 디스크를 가져와 다른 스택 또는 빈 막대 위에 놓는 것으로 구성된다.
  - 마지막으로, 더 작은 디스크 위에 디스크를 놓을 수 없다.
*/

function towerOfHanoi(n, fromRod, toRod, usingRod) {
  if (n === 1) {
    console.log(`Move disk 1 from ${fromRod} to ${toRod}`);
    return;
  }
  towerOfHanoi(n - 1, fromRod, usingRod, toRod);
  console.log(`Move disk ${n} from ${fromRod} to ${toRod}`);
  towerOfHanoi(n - 1, usingRod, toRod, fromRod);
}

towerOfHanoi(3, 'A', 'C', 'B');

// 2^n - 1
// Bog-O = O(2^n)
