import React from 'react';
import { render, waitForElement } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { MockedProvider } from '@apollo/react-testing';
import theme from '../theme';
import App from './App';

test('renders on load', async () => {
  const { container, getByText, getByPlaceholderText } = render(
    <MockedProvider mocks={[]} addTypename={false}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </MockedProvider>
  );
  const searchInput = await waitForElement(() => getByPlaceholderText('Search…'), { container });
  const searchButton = await waitForElement(() => getByText('Search'), { container });
  expect(searchInput).toBeTruthy();
  expect(searchButton).toBeTruthy();
});
