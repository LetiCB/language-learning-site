import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/globalStyles";
import { theme } from "./styles/theme";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { AppContainer, MainContent } from './App.styles';
import Breadcrumb from './components/Breadcrumb/Breadcrumb';
import AppRoutes from './routes/AppRoutes';
import { ProgressProvider } from './context/ProgressContext';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <ProgressProvider>
        <GlobalStyles />
        <AppContainer>
        <Router>
          <Header />
          <Breadcrumb />
          <MainContent>
            <AppRoutes />
          </MainContent>
          <Footer />
        </Router>
        </AppContainer>
      </ProgressProvider>
    </ThemeProvider>
  );
}

export default App;
