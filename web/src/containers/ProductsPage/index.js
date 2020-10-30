import { connect } from 'react-redux'
import { compose } from 'redux'
import { reduxForm } from 'redux-form'
import { validate } from './meta/validate'
import { formFields } from './meta/configObjects'
import Products from './components/Products'
import { getCategories } from './meta/actions'
import { selectCategories } from './meta/selectors'

const mapStateToProps = (state) => ({
  formFields,
  categories: selectCategories(state),
})

const mapDispatchToProps = (dispatch) => ({
  dispatchGetCategories: () => dispatch(getCategories()),
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)
const searchProductForm = reduxForm({ validate, form: 'searchProduct' })

export default compose(withConnect, searchProductForm)(Products)
