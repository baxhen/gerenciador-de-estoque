import { connect } from 'react-redux'
import { compose } from 'redux'
import { reduxForm } from 'redux-form'

import { validate } from './meta/validate'
import { formFields } from './meta/configObjects'
import Suppliers from './components/Suppliers'
import {
  getSuppliers,
  getSuppliersByField,
  deleteSupplier,
} from './meta/actions'
import { selectSuppliers } from './meta/selectors'

// import { deleteProduct,
//   getCategories,
//   getProducts,
//   getProductsByField, } from './meta/actions'
// import { selectCategories, selectProducts } from './meta/selectors'

const mapStateToProps = (state) => ({
  formFields,
  suppliers: selectSuppliers(state),
})

const mapDispatchToProps = (dispatch) => ({
  dispatchGetSuppliers: () => dispatch(getSuppliers()),
  dispatchGetSuppliersByField: (payload) =>
    dispatch(getSuppliersByField(payload)),
  dispatchDeleteSupplier: (payload) => dispatch(deleteSupplier(payload)),
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)
const searchProductForm = reduxForm({ validate, form: 'searchSupplier' })

export default compose(withConnect, searchProductForm)(Suppliers)
