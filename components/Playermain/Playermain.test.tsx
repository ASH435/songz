import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Playermain } from './Playermain';

describe('Playermain', () => {
  it('renders correctly', () => {
    render(<Playermain>Test content</Playermain>);
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<Playermain className="custom-class">Content</Playermain>);
    expect(screen.getByText('Content').parentElement).toHaveClass('custom-class');
  });

  // Add more tests here
});
