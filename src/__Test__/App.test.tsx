
import { render, screen } from '@testing-library/react';
import App from '../Components/App';

test('renders Bienvenue', () => {
  render(<App />);
  const BienvenueElement = screen.getByText(/Bienvenue/i);
  expect(BienvenueElement).toBeInTheDocument();
});
