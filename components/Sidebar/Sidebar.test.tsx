import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
  it('renders correctly', () => {
    render(<Sidebar>Test content</Sidebar>);
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<Sidebar className="custom-class">Content</Sidebar>);
    expect(screen.getByText('Content').parentElement).toHaveClass('custom-class');
  });

  // Add more tests here
});
