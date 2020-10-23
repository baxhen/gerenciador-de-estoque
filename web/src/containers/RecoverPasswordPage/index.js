import { connect } from 'react-redux'
import { compose } from 'redux'
import { reduxForm } from 'redux-form'

import RecoverPassword from './components/RecoverPassword'
import { selectRecoverPasswordMessage } from 'containers/AuthContainer/meta/selectors'
import { recoverPassword } from 'containers/AuthContainer/meta/actions'
import { formFields } from './meta/configObjects'
import { validate } from './meta/validade'

const mapStateToProps = (state) => ({
  recoverPasswordMessage: selectRecoverPasswordMessage(state),
  formFields,
})

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchRecoverPassword: () => dispatch(recoverPassword()),
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps)
const recoverPasswordForm = reduxForm({ validate, form: 'recoverPassword' })

export default compose(withConnect, recoverPasswordForm)(RecoverPassword)
