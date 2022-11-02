import Greet from '../components/Greet/Greet';
import { render, screen } from '@testing-library/react';

describe('Greet', () => {
  test('renders correctly', () => {
    render(<Greet />);
    const textElement = screen.getByText('Hello');

    expect(textElement).toBeInTheDocument();
  });
});

describe('Nested', () => {
  test('renders a name', () => {
    render(<Greet name='Doyu' />);
    const textElement = screen.getByText('Hello Doyu');

    expect(textElement).toBeInTheDocument();
  });
});
