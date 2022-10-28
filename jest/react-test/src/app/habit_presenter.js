export default class HabitPresenter {
  constructor(habits, maxHabits = 100) {
    this.habits = habits;
    this.maxHabits = maxHabits;
  }

  getHabits() {
    return this.habits;
  }

  increment(habit, update) {
    this.habits = this.habits.map((item) => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 };
      }

      return item;
    });

    update(this.habits);
  }

  decrement(habit, update) {
    this.habits = this.habits.map((item) => {
      if (item.id === habit.id) {
        // const cout = habit.count - 1;
        // 테스트 코드에서 habits[0]을 habit 값으로 전달.
        // 테스트 코드에서 habits 값은 고정된 값으로 decrement가 호출될 때마다 항상 같은 값을 전달.
        // 그렇기 때문에 habits[0].count 값이 1일 경우 2번 호출해도 count는 계속 0이 된다.
        // 즉, 정상적으로 테스트가 진행되지 않는다.
        // 이를 해결하기 위해서 변화된 값을 저장하고 있는 item을 이용해 count를 변경시킨다.
        const count = item.count - 1;
        return { ...habit, count: count < 0 ? 0 : count };
      }

      return item;
    });

    update(this.habits);
  }

  delete(habit, update) {
    this.habits = this.habits.filter((item) => item.id !== habit.id);

    update(this.habits);
  }

  add(name, update) {
    if (this.habits.length === this.maxHabits) {
      throw new Error(
        `habit의 갯수는 ${this.maxHabits} 이상이 될 수 없습니다.`
      );
    }
    this.habits = [...this.habits, { id: Date.now(), name, count: 0 }];

    update(this.habits);
  }

  reset(update) {
    this.habits = this.habits.map((item) => {
      if (item.count !== 0) {
        return { ...item, count: 0 };
      }

      return item;
    });

    update(this.habits);
  }
}
