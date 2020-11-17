import { connect } from 'react-redux'
import { compose } from 'redux'
import { reduxForm } from 'redux-form'

import EditClient from './components/EditClient'
import { formFields } from './meta/configObjects'
import { validate } from './meta/validate'
import { editClient } from 'containers/ClientsPage/meta/actions'
import {
  selectClient,
  selectAddClientErrorMessage,
} from 'containers/ClientsPage/meta/selectors'

const mapStateToProps = (state, ownProps) => ({
  formFields,
  client: selectClient(state, ownProps.location.state._id),
  addClientErrorMessage: selectAddClientErrorMessage(state),
})


function mapDispatchToProps(dispatch) {
  return {
    dispatchEditClient: (payload) => dispatch(editClient(payload)),
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps)
const clientForm = reduxForm({
  validate,
  form: 'client',
})

export default compose(withConnect,clientForm)(EditClient)
