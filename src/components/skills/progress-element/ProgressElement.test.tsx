import React from 'react';
import { render, screen } from '@testing-library/react';
import ProgressElement from './ProgressElement';

test('renders learn react link', () => {
  render(<ProgressElement/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
