// src/test-utils.tsx
import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

export const TestWrapper: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
