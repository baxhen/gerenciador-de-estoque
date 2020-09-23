/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { getAuth } from '../AuthContainer/meta/selectors';
import NavigationContainer from '../NavigationContainer';
import FooterContainer from '../FooterContainer';
import { ThemeProvider } from '@material-ui/core';
import theme from './meta/theme';

function App({ children }) {
  const [value, setValue] = useState(0);
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer value={value} setValue={setValue} />
      {children}
      <FooterContainer value={value} setValue={setValue} />
    </ThemeProvider>
  );
}

App.propTypes = {
  auth: PropTypes.object,
};

const mapStateToProps = (state) => ({
  auth: getAuth(state),
});

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(App);
