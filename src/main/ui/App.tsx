import React from 'react';
import styled from 'styled-components';
import Header from "./ui-header/Header";
import Main from "./ui-main/Main";

const AppWrapper = styled.div`
    margin: 0 auto;
    `;

const App = () => {
  return (
      <AppWrapper>
        <Header />
        <Main />
      </AppWrapper>
  )
}

export default App;
