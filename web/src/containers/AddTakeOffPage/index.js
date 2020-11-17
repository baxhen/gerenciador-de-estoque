import { connect } from 'react-redux'
import { compose } from 'redux'
import { reduxForm } from 'redux-form'

import AddTakeOff from './components/AddTakeOff'
import { formFields } from './meta/configObjects'
import { validate } from './meta/validate'
import { selectClients } from 'containers/ClientsPage/meta/selectors'
import { addTakeOff } from 'containers/TakeOffsPage/meta/actions'
import { selectAddTakeOffErrorMessage } from 'containers/TakeOffsPage/meta/selectors'
import { selectProducts } from 'containers/ProductsPage/meta/selectors'
import { getProducts } from 'containers/ProductsPage/meta/actions'

const mapStateToProps = (state) => ({
  formFields,
  clients: selectClients(state),
  products: selectProducts(state),
  addTakeOffErrorMessage: selectAddTakeOffErrorMessage(state),
})

function mapDispatchToProps(dispatch) {
  return {
    dispatchAddTakeOff: (payload) => dispatch(addTakeOff(payload)),
    dispatchGetProducts: () => dispatch(getProducts()),
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps)
const takeOffForm = reduxForm({
  validate,
  form: 'takeOff',
})

export default compose(withConnect,takeOffForm)(AddTakeOff)
