import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './dummy-theme';

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
];