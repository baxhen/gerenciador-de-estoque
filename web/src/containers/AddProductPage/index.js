import { connect } from 'react-redux'
import { compose } from 'redux'
import { reduxForm } from 'redux-form'

import AddProduct from './components/AddProduct'
import { formFields } from './meta/configObjects'
import { validate } from './meta/validate'
// import requireAuth from 'components/HighOrderComponents/requireAuth'
import {
  selectCategories,
  selectAddProductErrorMessage,
} from 'containers/ProductsPage/meta/selectors'
import { addCategory, addProduct } from 'containers/ProductsPage/meta/actions'

const mapStateToProps = (state) => ({
  formFields,
  categories: selectCategories(state),
  addProductErrorMessage: selectAddProductErrorMessage(state),
})

function mapDispatchToProps(dispatch) {
  return {
    dispatchAddProduct: (payload) => dispatch(addProduct(payload)),
    dispatchAddCategory: (payload) => dispatch(addCategory(payload)),
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps)
const productForm = reduxForm({
  validate,
  form: 'product',
})

export default compose(withConnect, productForm)(AddProduct)
