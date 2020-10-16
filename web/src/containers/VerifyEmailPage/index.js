import { connect } from 'react-redux';
import { compose } from 'redux';

import { selectVerifyEmailMessage } from 'containers/AuthContainer/meta/selectors';
import { verifyEmail } from 'containers/AuthContainer/meta/actions';
import VerifyEmail from './components/VerifyEmail';
import { verifyEmailDefault } from './meta/actions'



const mapStateToProps = (state) => ({
  verifyEmailMessage: selectVerifyEmailMessage(state),
});

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchVerifyEmail: () => dispatch(verifyEmail()),
    dispatchVerifyEmailDefault: (payload) => dispatch(verifyEmailDefault(payload)),
  };
};



const withConnect = connect(mapStateToProps, mapDispatchToProps);


export default compose(withConnect)(VerifyEmail);
