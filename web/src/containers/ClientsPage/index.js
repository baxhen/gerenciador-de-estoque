import { connect } from 'react-redux'
import { compose } from 'redux'
import { reduxForm } from 'redux-form'

import Clients from './components/Clients'
import { validate } from './meta/validate'
import { formFields } from './meta/configObjects'
import {
  getClients,
  getClientsByField,
  deleteClient,
} from './meta/actions'
import { selectClients } from './meta/selectors'

const mapStateToProps = (state) => ({
  formFields,
  clients: selectClients(state),
})

const mapDispatchToProps = (dispatch) => ({
  dispatchGetClients: () => dispatch(getClients()),
  dispatchGetClientsByField: (payload) =>
    dispatch(getClientsByField(payload)),
  dispatchDeleteClient: (payload) => dispatch(deleteClient(payload)),
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)
const searchProductForm = reduxForm({ validate, form: 'searchSupplier' })

export default compose(withConnect,searchProductForm)(Clients)
