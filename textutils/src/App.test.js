import { render, screen } from '@testing-library/react';
import App from './App';

test('renders TextUtils brand and heading', () => {
  render(<App />);
  const brandElements = screen.getAllByText(/textutils/i);
  expect(brandElements.length).toBeGreaterThan(0);
});
