import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Trackcard } from './Trackcard';

describe('Trackcard', () => {
  it('renders correctly', () => {
    render(<Trackcard>Test content</Trackcard>);
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<Trackcard className="custom-class">Content</Trackcard>);
    expect(screen.getByText('Content').parentElement).toHaveClass('custom-class');
  });

  // Add more tests here
});
