import { connect } from 'react-redux'
import { compose } from 'redux'
import { reduxForm } from 'redux-form'

import EditProduct from './components/EditProduct'
import { formFields } from './meta/configObjects'
import { validate } from './meta/validate'
// import requireAuth from 'components/HighOrderComponents/requireAuth'
import {
  selectCategories,
  selectAddProductErrorMessage,
  selectProduct,
} from 'containers/ProductsPage/meta/selectors'
import { editProduct, addCategory } from 'containers/ProductsPage/meta/actions'

const mapStateToProps = (state, ownProps) => ({
  formFields,
  product: selectProduct(state, ownProps.location.state._id),
  categories: selectCategories(state),
  addProductErrorMessage: selectAddProductErrorMessage(state),
})

function mapDispatchToProps(dispatch) {
  return {
    dispatchEditProduct: (payload) => dispatch(editProduct(payload)),
    dispatchAddCategory: (payload) => dispatch(addCategory(payload)),
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps)
const productForm = reduxForm({
  validate,
  form: 'product',
})

export default compose(withConnect, productForm)(EditProduct)
