import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import React from 'react';

test('renders app', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
});