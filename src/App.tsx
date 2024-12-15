import React from 'react';
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/globalStyles";
import { theme } from "./styles/theme";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { AppContainer, MainContent } from './App.styles';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppContainer>
        <Header branding="English" />
        <MainContent>
          <h1>Welcome</h1>
          <p>Let's learn languages together!</p>
        </MainContent>
        <Footer />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
