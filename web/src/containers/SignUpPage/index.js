import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm } from 'redux-form';

import { signUserUp } from '../AuthContainer/meta/actions';
import SignUp from './components/SignUp';
import useStyles from './components/styles';

const mapStateToProps = ({ auth: { errorMessage } }) => ({
  errorMessage,
});

function mapDispatchToProps(dispatch) {
  return {
    dispatchSignUp: () => dispatch(signUserUp()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const signupForm = reduxForm({ form: 'signup' });

export default compose(withConnect, signupForm, useStyles)(SignUp);
