import { connect } from 'react-redux'
import { compose } from 'redux'
import { reduxForm } from 'redux-form'

import AddSupplier from './components/AddSupplier'
import { formFields } from './meta/configObjects'
import { validate } from './meta/validate'
import { selectAddSupplierErrorMessage } from 'containers/SuppliersPage/meta/selectors'
import { addSupplier } from 'containers/SuppliersPage/meta/actions'

const mapStateToProps = (state) => ({
  formFields,
  addSupplierErrorMessage: selectAddSupplierErrorMessage(state),
})

const mapDispatchToProps = (dispatch) => ({
  dispatchAddSupplier: (payload) => dispatch(addSupplier(payload)),
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)
const supplierForm = reduxForm({
  validate,
  form: 'supplier',
})

export default compose(withConnect, supplierForm)(AddSupplier)
