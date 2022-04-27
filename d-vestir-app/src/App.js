import './App.css';
import '@stripe/stripe-js'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { GlobalStyles, theme } from './components/styles/Global';
import Routers from './routers/Routers'
import { StyledContainer } from './components/styles/Container.Styled';
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <div className="App">

      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <StyledContainer>
        </StyledContainer>
        <Routers />
      </ThemeProvider>

    </div>
  );
}

export default App;
