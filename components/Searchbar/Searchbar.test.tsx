import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Searchbar } from './Searchbar';

describe('Searchbar', () => {
  it('renders correctly', () => {
    render(<Searchbar>Test content</Searchbar>);
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<Searchbar className="custom-class">Content</Searchbar>);
    expect(screen.getByText('Content').parentElement).toHaveClass('custom-class');
  });

  // Add more tests here
});
