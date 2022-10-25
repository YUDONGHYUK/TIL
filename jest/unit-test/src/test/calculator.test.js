const Calculator = require('../calculator.js');

describe('Calculator module', () => {
  let cal;

  // 많은 테스트에서 반복적으로 수행해야 하는 작업이 있는 경우
  // beforeEach 및 afterEach 훅을 사용할 수 있다.
  beforeEach(() => {
    cal = new Calculator();
  });

  it('inits with 0', () => {
    expect(cal.value).toBe(0);
  });

  it('sets', () => {
    cal.set(3);

    expect(cal.value).toBe(3);
  });

  it('clear', () => {
    cal.set(3);
    cal.clear();

    expect(cal.value).toBe(0);
  });

  it('adds', () => {
    cal.set(1);
    cal.add(2);

    expect(cal.value).toBe(3);
  });

  it('subtracts', () => {
    cal.subtract(1);

    expect(cal.value).toBe(-1);
  });

  it('multiplies', () => {
    cal.set(3);
    cal.multiply(5);

    expect(cal.value).toBe(15);
  });

  // 나누기는 여러 테스트를 진행해야 하므로 다시 describe을 사용해서 그룹으로 묶어줌
  describe('divides', () => {
    it('0 / 0 === NaN', () => {
      cal.divide(0);

      expect(cal.value).toBe(NaN);
    });

    it('1 / 0 === Infinity', () => {
      cal.set(1);
      cal.divide(0);

      expect(cal.value).toBe(Infinity);
    });

    it('3 / 3 === 1', () => {
      cal.set(3);
      cal.divide(3);

      expect(cal.value).toBe(1);
    });
  });
});
