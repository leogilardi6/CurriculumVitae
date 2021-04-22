import React from 'react';
import { render, screen } from '@testing-library/react';
import Language from './Language';

test('renders learn react link', () => {
  render(<Language/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
