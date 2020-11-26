import { connect } from 'react-redux'
import { compose } from 'redux'
import { reduxForm } from 'redux-form'
import { validate } from './meta/validate'
import { formFields } from './meta/configObjects'
import Stock from './components/Stock'
import { getStock } from './meta/actions'
import { selectStock } from './meta/selectors'
import { selectCategories } from 'containers/ProductsPage/meta/selectors'
import { getCategories } from 'containers/ProductsPage/meta/actions'

const mapStateToProps = (state) => ({
  stock: selectStock(state),
  categories: selectCategories(state),
  formFields,
})

const mapDispatchToProps = (dispatch) => ({
  dispatchGetStock: () => dispatch(getStock()),
  dispatchGetCategories: () => dispatch(getCategories()),
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)
const searchStockForm = reduxForm({ validate, form: 'searchStock' })

export default compose(withConnect, searchStockForm)(Stock)
