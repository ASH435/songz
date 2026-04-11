import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Tracklist } from './Tracklist';

describe('Tracklist', () => {
  it('renders correctly', () => {
    render(<Tracklist>Test content</Tracklist>);
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<Tracklist className="custom-class">Content</Tracklist>);
    expect(screen.getByText('Content').parentElement).toHaveClass('custom-class');
  });

  // Add more tests here
});
