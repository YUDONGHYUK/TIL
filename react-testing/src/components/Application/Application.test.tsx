import { render, screen } from '@testing-library/react';
import Application from './Application';

describe('Application', () => {
  test('render correctly', () => {
    render(<Application />);

    const pageHeading = screen.getByRole('heading', {
      name: 'Job application form',
      level: 1,
    });
    expect(pageHeading).toBeInTheDocument();

    const sectionHeading = screen.getByRole('heading', {
      name: 'Section 1',
      level: 2,
    });
    expect(sectionHeading).toBeInTheDocument();

    // using getByRole
    const nameElement = screen.getByRole('textbox', {
      name: 'Name',
    });
    expect(nameElement).toBeInTheDocument();

    // using getByLabelText
    const nameElement2 = screen.getByLabelText('Name', {
      selector: 'input',
    });
    expect(nameElement2).toBeInTheDocument();

    // using getByPlaceholderText
    const nameElement3 = screen.getByPlaceholderText('Fullname');
    expect(nameElement3).toBeInTheDocument();

    const bioElement = screen.getByRole('textbox', {
      name: 'Bio',
    });
    expect(bioElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole('combobox');
    expect(jobLocationElement).toBeInTheDocument();

    // using getByRole
    const termsElement = screen.getByRole('checkbox');
    expect(termsElement).toBeInTheDocument();

    // using getByLabeText
    const termsElement2 = screen.getByLabelText(
      'I agree to the terms and conditions'
    );
    expect(termsElement2).toBeInTheDocument();

    const submitButtonElement = screen.getByRole('button');
    expect(submitButtonElement).toBeInTheDocument();
  });
});
