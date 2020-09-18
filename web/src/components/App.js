import React from 'react';
import { ThemeProvider } from '@material-ui/styles';

import theme from 'components/ui/Theme';
import Header from 'components/ui/Header';

export default ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      {children}
    </ThemeProvider>
  );
};
