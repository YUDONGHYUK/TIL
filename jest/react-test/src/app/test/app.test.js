import React from 'react';
import renderer from 'react-test-renderer';
import App from '../app';
import HabitPresenter from '../habit_presenter';

describe('App', () => {
  let presenter;

  beforeEach(() => {
    presenter = new HabitPresenter([
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Coding', count: 1 },
    ]);
  });

  it('renders', () => {
    const component = renderer.create(<App presenter={presenter} />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
