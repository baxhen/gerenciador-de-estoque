import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm } from 'redux-form';

import RecoverPassword from './components/RecoverPassword';
import { formFields } from './meta/configObjects';
import { validate } from './meta/validade';

const mapStateToProps = ({ auth: { errorMessage } }) => ({
  errorMessage,
  formFields,
});

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchRecoverPassword: (email) => console.log('implement action', email),
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const recoverPasswordForm = reduxForm({ validate, form: 'recoverPassword' });

export default compose(withConnect, recoverPasswordForm)(RecoverPassword);
