import { render, screen } from '@testing-library/react';
import App from './App';
import { ThemeProvider } from './components/ThemeProvider';

// Mock matchMedia to support the carousel in JSDOM
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  takeRecords() {
    return [];
  }
  unobserve() {}
};

// Mock ResizeObserver
global.ResizeObserver = class ResizeObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
};

test('renders app without errors', async () => {
  render(
    <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
      <App />
    </ThemeProvider>
  );
  // Simple check that the App renders
  const appElement = screen.getByTestId('app');
  expect(appElement).toBeInTheDocument();
});
