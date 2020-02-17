import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import styled from 'styled-components';
import HomePage from './HomePage';
import RepositoryPage from './RepositoryPage';
import GlobalStyles from './GlobalStyles';

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 100%;
  padding: 24px;
  width: 720px;

  @media (min-width: 480px) {
    padding: 48px;
  }
`;

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <GlobalStyles />
      <Wrapper>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/:owner/:repo" component={RepositoryPage} />
          <Redirect to="/" />
        </Switch>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
