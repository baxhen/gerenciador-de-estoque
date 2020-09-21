import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/styles';

import theme from 'components/ui/Theme';
import Header from 'components/ui/Header';
import Footer from 'components/ui/Footer';

export default ({ children }) => {
  const [value, setValue] = useState(0);
  return (
    <ThemeProvider theme={theme}>
      <Header value={value} setValue={setValue} />
      {children}
      <Footer value={value} setValue={setValue} />
    </ThemeProvider>
  );
};
