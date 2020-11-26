import { connect } from 'react-redux'
import { compose } from 'redux'
import { reduxForm } from 'redux-form'
import { validate } from './meta/validate'
import { formFields } from './meta/configObjects'
import Stock from './components/Stock'
import { getStock } from './meta/actions'
import { selectStock } from './meta/selectors'

const mapStateToProps = (state) => ({
  stock: selectStock(state),
  formFields,
})

const mapDispatchToProps = (dispatch) => ({
  dispatchGetStock: () => dispatch(getStock()),
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)
const searchStockForm = reduxForm({ validate, form: 'searchStock' })

export default compose(withConnect, searchStockForm)(Stock)
