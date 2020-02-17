import React from 'react';
import { act, render, fireEvent, waitForElement, getByTestId } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import theme from '../theme';
import mockData from '../mock-data/repositories';
import HomePage from './HomePage';
import { QUERY_REPOSITORIES } from '../queries';

const mocks = [
  {
    request: {
      query: QUERY_REPOSITORIES,
      variables: { searchTerm: 'example sort:stars', first: 20 }
    },
    result: mockData
  },
  {
    request: {
      query: QUERY_REPOSITORIES,
      variables: { searchTerm: 'error sort:stars', first: 20 }
    },
    error: new Error('something went wrong')
  }
];

const renderComponent = (mocks, addTypename) =>
  render(
    <MockedProvider mocks={mocks} addTypename={addTypename}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <HomePage />
        </BrowserRouter>
      </ThemeProvider>
    </MockedProvider>
  );

test('renders a search form on load', async () => {
  const { container, getByPlaceholderText, getByText } = renderComponent([], false);
  const searchInput = await waitForElement(() => getByPlaceholderText('Search…'), { container });
  const searchButton = await waitForElement(() => getByText('Search'), { container });
  expect(searchInput).toBeTruthy();
  expect(searchButton).toBeTruthy();
});

test('renders a loading message after filling out and submitting the form', async () => {
  const { container, getByPlaceholderText, getByText, getByTestId } = renderComponent([], false);
  const searchInput = getByPlaceholderText('Search…');
  const searchButton = getByText('Search');
  fireEvent.change(searchInput, { target: { value: 'example' } });
  fireEvent.click(searchButton);
  const loading = await waitForElement(() => getByTestId(`loading`), { container });
  expect(loading).toBeTruthy();
});

test('renders a list of results if the request was successful', async () => {
  const { container, getByPlaceholderText, getByText, getAllByTestId } = renderComponent(
    mocks,
    true
  );
  const searchInput = getByPlaceholderText('Search…');
  const searchButton = getByText('Search');
  fireEvent.change(searchInput, { target: { value: 'example' } });
  fireEvent.click(searchButton);
  const links = await waitForElement(() => getAllByTestId('respository-list-item'), { container });
  expect(links.length).toBe(20);
});

test('renders an error message if the request was not successful', async () => {
  const { container, getByPlaceholderText, getByText } = renderComponent(mocks, true);
  const searchInput = getByPlaceholderText('Search…');
  const searchButton = getByText('Search');
  fireEvent.change(searchInput, { target: { value: 'error' } });
  fireEvent.click(searchButton);
  const message = await waitForElement(() => getByText(`He's Dead Jim…`), { container });
  expect(message).toBeTruthy();
});
