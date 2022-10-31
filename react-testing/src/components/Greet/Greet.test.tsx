import { render, screen } from '@testing-library/react';
import Greet from './Greet';

test('Greet renders correctly', () => {
  render(<Greet />);
  const textElement = screen.getByText('Hello');

  // textElement 요소는 render 메소드에 의해 작성된 가상 DOM인 document에 있는가?
  expect(textElement).toBeInTheDocument();
});
