import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import renderer from 'react-test-renderer';
import Habits from '../habits';

describe('Habits component', () => {
  const habits = [
    { name: 'Reading', count: 0 },
    { name: 'Running', count: 0 },
  ];
  let HabitsComponent;
  let onIncrement;
  let onDecrement;
  let onDelete;
  let onAdd;
  let onReset;

  beforeEach(() => {
    onIncrement = jest.fn();
    onDecrement = jest.fn();
    onDelete = jest.fn();
    onAdd = jest.fn();
    onReset = jest.fn();
    HabitsComponent = (
      <Habits
        habits={habits}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        onDelete={onDelete}
        onAdd={onAdd}
        onReset={onReset}
      />
    );
  });

  it('renders', () => {
    const compoent = renderer.create(HabitsComponent);

    expect(compoent.toJSON()).toMatchSnapshot();
  });

  describe('Button Click', () => {
    beforeEach(() => {
      render(HabitsComponent);
    });

    it('"increment" 버튼 클릭시 onIncrement 호출', () => {
      const button = screen.getAllByTitle('increase')[0];
      userEvent.click(button);

      expect(onIncrement).toHaveBeenCalledWith(habits[0]);
    });

    it('"decrement" 버튼 클릭시 onDecrement 호출', () => {
      const button = screen.getAllByTitle('decrease')[0];
      userEvent.click(button);

      expect(onDecrement).toHaveBeenCalledWith(habits[0]);
    });

    it('"Delete" 버튼 클릭시 onDelete 호출', () => {
      const button = screen.getAllByTitle('delete')[0];
      userEvent.click(button);

      expect(onDelete).toHaveBeenCalledWith(habits[0]);
    });

    it('"Add" 버튼 킬릭시 onAdd 호출', () => {
      const input = screen.getByPlaceholderText('Habit');
      const button = screen.getByText('Add');
      userEvent.type(input, 'Coding');
      userEvent.click(button);

      expect(onAdd).toHaveBeenCalledWith('Coding');
    });

    it('"Reset All" 버튼 클릭시 onReset 호출', () => {
      const button = screen.getByText('Reset All');
      userEvent.click(button);

      expect(onReset).toHaveBeenCalledTimes(1);
    });
  });
});
