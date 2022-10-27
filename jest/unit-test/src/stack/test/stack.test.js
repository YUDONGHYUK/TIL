const Stack = require('../stack.js');

describe('Stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it('처음 stack은 빈 상태', () => {
    expect(stack.size()).toBe(0);
  });

  it('push', () => {
    stack.push('dog');

    expect(stack.size()).toBe(1);
  });

  describe('pop', () => {
    it('stack이 빈 상태에서 pop 호출하면 에러 발생', () => {
      expect(() => {
        stack.pop();
      }).toThrow('Stack is empty');
    });

    it('마지막으로 push된 아이템을 반환하고 stack에서는 삭제', () => {
      stack.push('dog');
      stack.push('banana');

      expect(stack.pop()).toBe('banana');
      expect(stack.size()).toBe(1);
    });
  });

  describe('peek', () => {
    it('stack이 빈 상태에서 peek 호출하면 에러 발생', () => {
      expect(() => stack.peek()).toThrow('Stack is empty');
    });

    it('마지막으로 push된 아이템을 반환하고 stack에서는 그대로 유지', () => {
      stack.push('apple');
      stack.push('banana');

      expect(stack.peek()).toBe('banana');
      expect(stack.size(0)).toBe(2);
    });
  });
});
