import React from 'react';
import { render, waitForElement, getByText, getByTestId } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';
import { ThemeProvider } from 'styled-components';
import { MemoryRouter, Route } from 'react-router-dom';
import wait from 'waait';
import theme from '../theme';
import RepositoryPage from './RepositoryPage';
import { QUERY_REPOSITORY } from '../queries';
import mockData from '../mock-data/repository';

const mocks = [
  {
    request: { query: QUERY_REPOSITORY, variables: { owner: 'facebook', repo: 'react' } },
    result: mockData
  }
];

const renderComponent = (mocks, addTypename, route) => {
  return render(
    <MockedProvider mocks={mocks} addTypename={addTypename}>
      <MemoryRouter initialEntries={[route]}>
        <ThemeProvider theme={theme}>
          <Route path="/:owner/:repo" component={RepositoryPage} />
        </ThemeProvider>
      </MemoryRouter>
    </MockedProvider>
  );
};

test('renders a loading message on load', async () => {
  const { container, getByTestId } = renderComponent([], false, '/facebook/react');
  const loading = await waitForElement(() => getByTestId('loading'), { container });
  expect(loading).toBeTruthy();
});

test('renders the repository details if the request was successful', async () => {
  const { container, getByText } = renderComponent(mocks, true, '/facebook/react');
  const title = await waitForElement(() => getByText('facebook/react'), { container });
  expect(title).toBeTruthy();
});
