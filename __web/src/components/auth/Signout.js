import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signout extends React.Component {
  componentDidMount() {
    this.props.signout();
    this.props.history.push('/');
  }

  render() {
    return null;
  }
}

export default connect(null, actions)(Signout);