import { connect } from 'react-redux'
import { compose } from 'redux'
import { reduxForm } from 'redux-form'

import { formFields } from './meta/configObjects'
import { validate } from './meta/validate'

import EditSupplier from './components/EditSupplier'
import { editSupplier } from 'containers/SuppliersPage/meta/actions'
import {
  selectSupplier,
  selectAddSupplierErrorMessage,
} from 'containers/SuppliersPage/meta/selectors'

const mapStateToProps = (state, ownProps) => ({
  formFields,
  supplier: selectSupplier(state, ownProps.location.state._id),
  addSupplierErrorMessage: selectAddSupplierErrorMessage(state),
})

function mapDispatchToProps(dispatch) {
  return {
    dispatchEditSupplier: (payload) => dispatch(editSupplier(payload)),
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps)
const supplierForm = reduxForm({
  validate,
  form: 'supplier',
})

export default compose(withConnect, supplierForm)(EditSupplier)
