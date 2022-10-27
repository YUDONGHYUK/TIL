const check = require('../check.js');

describe('check', () => {
  let onSuccess;
  let onFail;

  beforeEach(() => {
    // onSuccess, onFail 둘 다 jest에서 제공하는 mock 함수 선언
    onSuccess = jest.fn();
    onFail = jest.fn();
  });

  it('should call onSuccess when predicate is true', () => {
    check(() => true, onSuccess, onFail);

    // onSuccess mock 함수가 1번은 호출 되었다.
    // check 함수에 predicate로 true를 반환하는 함수를 전달 했기 때문에

    // -> onSuccess mock 함수가 1번 호출된다.
    // expect(onSuccess.mock.calls.length).toBe(1);
    expect(onSuccess).toHaveBeenCalledTimes(1);

    // onSuccess가 호출 되었을 때 'yes' 문자열이 전달되는 것을 검증
    // -> calls의 첫 번째로 호출된 함수의 첫 번째 인자는 'yes'가 되어야 한다.
    // expect(onSuccess.mock.calls[0][0]).toBe('yes');
    expect(onSuccess).toHaveBeenCalledWith('yes'); // onSuccess 함수는 'yes'와 함께 호출되어야 한다.

    // -> onFail mock 함수는 호출되지 않는다.
    // expect(onFail.mock.calls.length).toBe(0);
    expect(onFail).toHaveBeenCalledTimes(0);
  });

  it('should call onFail when predicate is false', () => {
    check(() => false, onSuccess, onFail);

    expect(onFail).toHaveBeenCalledTimes(1);
    expect(onFail).toHaveBeenCalledWith('no');
    expect(onSuccess).toHaveBeenCalledTimes(0);
  });
});
