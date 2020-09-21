import React from 'react';
import { ThemeProvider } from '@material-ui/styles';

import theme from 'components/ui/Theme';
import Header from 'components/ui/Header';
import Footer from 'components/ui/Footer';

export default ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      {children}
      <Footer />
    </ThemeProvider>
  );
};
