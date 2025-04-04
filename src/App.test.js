import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Bijoy Roy', () => {
  render(<App />);
  const nameElement = screen.getByText(/Bijoy Roy/i);
  expect(nameElement).toBeInTheDocument();
});