import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Spotifyembed } from './Spotifyembed';

describe('Spotifyembed', () => {
  it('renders correctly', () => {
    render(<Spotifyembed>Test content</Spotifyembed>);
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<Spotifyembed className="custom-class">Content</Spotifyembed>);
    expect(screen.getByText('Content').parentElement).toHaveClass('custom-class');
  });

  // Add more tests here
});
