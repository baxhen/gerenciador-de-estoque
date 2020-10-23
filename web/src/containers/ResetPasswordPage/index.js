import { connect } from 'react-redux'
import { compose } from 'redux'
import { reduxForm } from 'redux-form'

import ResetPassword from './components/ResetPassword'
import { selectResetPasswordMessage } from 'containers/AuthContainer/meta/selectors'
import { resetPassword } from 'containers/AuthContainer/meta/actions'
import { formFields } from './meta/configObjects'
import { validate } from './meta/validate'

const mapStateToProps = (state) => ({
  formFields,
  resetPasswordMessage: selectResetPasswordMessage(state),
})

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchResetPassword: () => dispatch(resetPassword()),
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps)
const resetPasswordForm = reduxForm({ validate, form: 'resetPassword' })

export default compose(withConnect, resetPasswordForm)(ResetPassword)
