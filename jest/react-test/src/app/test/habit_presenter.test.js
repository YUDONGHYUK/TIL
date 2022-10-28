import HabitPresenter from '../habit_presenter';

describe('HabitPresenter', () => {
  const habits = [
    { id: 1, name: 'Reading', count: 1 },
    { id: 2, name: 'Running', count: 0 },
  ];
  let presenter;
  let update;

  beforeEach(() => {
    presenter = new HabitPresenter(habits, 3);
    update = jest.fn();
  });

  it('habits로 초기화', () => {
    expect(presenter.getHabits()).toEqual(habits);
  });

  it('count 증가', () => {
    presenter.increment(habits[0], update);

    expect(presenter.getHabits()[0].count).toBe(2);
    checkUpdateIsCalled();
  });

  it('count를 감소', () => {
    presenter.decrement(habits[0], update);

    expect(presenter.getHabits()[0].count).toBe(0);
    checkUpdateIsCalled();
  });

  it('count 값을 감소시킬 때 0보다 작을 수 없다.', () => {
    presenter.decrement(habits[0], update);
    presenter.decrement(habits[0], update);

    expect(presenter.getHabits()[0].count).toBe(0);
  });

  it('리스트에서 habit 삭제', () => {
    presenter.delete(habits[0], update);

    expect(presenter.getHabits().length).toBe(1);
    expect(presenter.getHabits()[0].name).toBe('Running');
    checkUpdateIsCalled();
  });

  it('리스트에 habit 추가', () => {
    presenter.add('Coding', update);

    expect(presenter.getHabits().length).toBe(3);
    expect(presenter.getHabits()[2].name).toBe('Coding');
    expect(presenter.getHabits()[2].count).toBe(0);
    checkUpdateIsCalled();
  });

  it('maxHabit 초과로 habit이 작성되면 에러 발생', () => {
    presenter.add('Coding', update);

    expect(() => {
      presenter.add('Eating', update);
    }).toThrow('habit의 갯수는 3 이상이 될 수 없습니다.');
  });

  describe('reset', () => {
    it('모든 habit count 0으로 리셋', () => {
      presenter.reset(update);

      expect(presenter.getHabits()[0].count).toBe(0);
      expect(presenter.getHabits()[1].count).toBe(0);
      checkUpdateIsCalled();
    });

    it('count가 0인 값은 새로운 객체를 생성 X', () => {
      const habits = presenter.getHabits();
      presenter.reset(update);
      const updatedHabits = presenter.getHabits();

      // object의 불변성을 체크하기 위해서는 toBe를 사용한다.
      // toEqual을 사용하면 object의 데이터을 비교하기 때문에 같다고 나온다.
      // toBe는 참조값을 비교하고 toEqual은 데이터를 비교한다!
      expect(updatedHabits[1]).toBe(habits[1]);
    });
  });

  function checkUpdateIsCalled() {
    expect(update).toHaveBeenCalledTimes(1);
    // update가 호출될 때 count가 변경된(업데이트된) habits를 받았는지 확인.
    expect(update).toHaveBeenCalledWith(presenter.getHabits());
  }
});
