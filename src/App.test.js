import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Footer from './layout/Footer';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('test du footer', () => {
  const { getByText } = render(<Footer />);
  const linkElement = getByText(/ReactJS/i);
  expect(linkElement).toBeInTheDocument();
});
