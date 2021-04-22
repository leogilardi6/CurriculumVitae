import React from 'react';
import { render, screen } from '@testing-library/react';
import Information from './Information';

test('renders learn react link', () => {
  render(<Information />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
