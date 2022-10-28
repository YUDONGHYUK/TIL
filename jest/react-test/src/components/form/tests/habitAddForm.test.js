import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HabitAddForm from '../habitAddForm';
import renderer from 'react-test-renderer';

describe('HabitAddForm', () => {
  it('renders', () => {
    // 스냅샷 테스트
    const component = renderer.create(<HabitAddForm onAdd={jest.fn()} />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  describe('Form submit', () => {
    let onAdd;
    let input;
    let button;

    beforeEach(() => {
      onAdd = jest.fn();
      render(<HabitAddForm onAdd={onAdd} />);
      input = screen.getByPlaceholderText('Habit');
      button = screen.getByText('Add');
    });

    it('유효한 habit이 입력되고 버튼이 클릭되면 onAdd 호출', () => {
      // input에 원하는 습관의 이름을 타이핑 한 다음에
      // add라는 버튼을 클릭하면
      // onAdd가 input에 입력된 이름과 함께 호출되어야 한다.
      // userEvent.type(input, 'New Habit');
      userEvent.type(input, 'New Habit');
      userEvent.click(button);

      expect(onAdd).toHaveBeenCalledWith('New Habit');
    });

    it('habit에 입력된 값이 없으면 onAdd 호출 X', () => {
      userEvent.type(input, '');
      userEvent.click(button);

      expect(onAdd).toHaveBeenCalledTimes(0);
    });
  });
});
