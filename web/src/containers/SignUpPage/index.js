import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm } from 'redux-form';

import { signUserUp } from '../AuthContainer/meta/actions';
import SignUp from './components/SignUp';
import useStyles from './components/styles';
import { validate } from './meta/validate';
import { formFields } from './meta/configObjects';

const mapStateToProps = ({ auth: { errorMessage } }) => ({
  errorMessage,
  formFields,
});

function mapDispatchToProps(dispatch) {
  return {
    dispatchSignUp: () => dispatch(signUserUp()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const signupForm = reduxForm({ validate, form: 'signup' });

export default compose(withConnect, signupForm, useStyles)(SignUp);
