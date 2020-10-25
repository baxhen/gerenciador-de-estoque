/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React, { useState, memo } from 'react'
// import PropTypes from 'prop-types';
import { compose } from 'redux'
import { connect } from 'react-redux'

import NavigationContainer from '../NavigationContainer'
// import FooterContainer from '../FooterContainer'
import { ThemeProvider } from '@material-ui/core'
import theme from '../../store/theme'
import DashboardPage from 'containers/DashboardPage'

function App({ children, auth }) {
  const [value, setValue] = useState(0)
  return (
    <ThemeProvider theme={theme}>
      {auth ? (
        <DashboardPage value={value} setValue={setValue}></DashboardPage>
      ) : (
        <NavigationContainer value={value} setValue={setValue} />
      )}
      {children}
      {/* <FooterContainer setValue={setValue} /> */}
    </ThemeProvider>
  )
}

App.propTypes = {}

const mapStateToProps = (state) => ({
  auth: state.auth.isAuthenticated,
})

const withConnect = connect(mapStateToProps)

export default compose(withConnect, memo)(App)
