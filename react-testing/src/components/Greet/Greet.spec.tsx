import Greet from './Greet';
import { render, screen } from '@testing-library/react';

describe('Greet', () => {
  it('renders correctly', () => {
    render(<Greet />);
    const textElement = screen.getByText('Hello');

    expect(textElement).toBeInTheDocument();
  });
});

describe('Nested', () => {
  it('renders a name', () => {
    render(<Greet name='Doyu' />);
    const textElement = screen.getByText('Hello Doyu');

    expect(textElement).toBeInTheDocument();
  });
});
