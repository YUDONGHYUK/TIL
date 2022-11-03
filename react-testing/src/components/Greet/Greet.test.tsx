/**
 * Greet 컴포넌트는 컴포넌트로 name을 건네받았을 경우에 hello를 렌더링해야한다.
 * hello 뒤에 이름이 붙도록 렌더링 해야한다.
 */

import Greet from './Greet';
import { render, screen } from '@testing-library/react';

describe('Greet', () => {
  test('renders correctly', () => {
    render(<Greet />);
    const textElement = screen.getByText(/Hello/);

    expect(textElement).toBeInTheDocument();
  });
});

// describe('Nested', () => {
//   test('renders a name', () => {
//     render(<Greet name='Doyu' />);
//     const textElement = screen.getByText('Hello Doyu');

//     expect(textElement).toBeInTheDocument();
//   });
// });
