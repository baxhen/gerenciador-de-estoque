import { connect } from 'react-redux';
import { getAuth } from '../AuthContainer/meta/selectors';
import {
  headerConfig,
  linksConfig,
} from '../NavigationContainer/meta/configObjects';
import Navigation from './components/Navigation';

const mapStateToProps = (state) => ({
  headerConfig,
  linksConfig,
  auth: getAuth(state),
});

const mapDispatchToProps = {};

const NavigationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);

export default NavigationContainer;
