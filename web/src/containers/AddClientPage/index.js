import { connect } from 'react-redux'
import { compose } from 'redux'
import { reduxForm } from 'redux-form'

import AddClient from './components/AddClient'
import { formFields } from './meta/configObjects'
import { validate } from './meta/validate'
import { selectAddClientErrorMessage } from 'containers/ClientsPage/meta/selectors'
import { addClient } from 'containers/ClientsPage/meta/actions'

const mapStateToProps = (state) => ({
  formFields,
  addClientErrorMessage: selectAddClientErrorMessage(state),
})

const mapDispatchToProps = (dispatch) => ({
  dispatchAddClient: (payload) => dispatch(addClient(payload)),
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)
const clientForm = reduxForm({
  validate,
  form: 'client',
})


export default compose(withConnect,clientForm)(AddClient)
