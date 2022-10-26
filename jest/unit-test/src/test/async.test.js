const fetchProduct = require('../async.js');

describe('Async', () => {
  // 비동기 코드(fetchProduct)는 비동기적으로 수행되기 때문에
  // 비동기 코드를 호출해 놓고 then이 호출 되었는지 상관하지 않고
  // async - done의 콜백 함수의 코드 블록은 끝이난다.
  // 즉, it이 끝나므로 별도의 expect 없이 끝난거로 생각한다.
  // 때문에 toEqual에 잘못된 값이 입력되어도 통과된 것으로 나온다.
  // 콜백 함수의 인자로 done을 받아와서 종료된 시점에서 호출해주면 해결된다.
  it('async - done', (done) => {
    fetchProduct().then((item) => {
      expect(item).toEqual({ item: 'Milk', price: 2000 });
      done();
    });
  });

  // Promise 자체를 return하는 방식
  // 실패했을 경우 done 방식보다 return 방식이 빠르다.
  it('async - return', () => {
    return fetchProduct().then((item) => {
      expect(item).toEqual({ item: 'Milk', price: 2000 });
    });
  });

  // async / await 방식
  // 1. 콜백 함수 앞에 async 키워드를 사용한다.
  it('async - await', async () => {
    const item = await fetchProduct();
    expect(item).toEqual({ item: 'Milk', price: 2000 });
  });

  // .resolves / .rejects 방식
  it('async - resolves', () => {
    return expect(fetchProduct()).resolves.toEqual({
      item: 'Milk',
      price: 2000,
    });
  });

  it('async - rejects', () => {
    return expect(fetchProduct('error')).rejects.toBe('network error');
  });
});
